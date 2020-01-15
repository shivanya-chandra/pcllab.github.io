const fs = require("fs")
const path = require("path")
const http = require("http")
const crypto = require("crypto")
const exec = require("child_process").exec
const SECRET = require("./config").token
const DEST_FOLDER = require("./config").destFolder
const PORT = require("./config").port

function log(data) {
	const message = `[${new Date().toISOString()}] ${data}`

	console.log(message)
	fs.appendFileSync("./log.txt", message, { flag: "w" }, function(err) {
		if (err) console.error(err)
	})
}

function logError(data) {
	log(`ERROR: ${data}`)
}

function logInfo(data) {
	log(`INFO: ${data}`)
}

http.createServer((req, res) => {
	req.on("data", chunk => {
		const signature = `sha1=${crypto
			.createHmac("sha1", SECRET)
			.update(chunk)
			.digest("hex")}`

		let command = ""

		const isAllowed = req.headers["x-hub-signature"] === signature
		if (isAllowed) {
			command = "git pull git@website:PCLLAB/website-mkdocs.git"
			logInfo(`Running: ${command}`)
			exec(command, (err, stdout, stderr) => {
				if (err) {
					logError(err)
					return
				}

				command = "cd .. && mkdocs build"
				logInfo(`Running: ${command}`)
				exec(command, (err, stdout, stderr) => {
					if (err) {
						logError(err)
						return
					}

					command = "cp -a ../site/ " + path.join(DEST_FOLDER)
					logInfo(`Running: ${command}`)
					exec(command, (err, stdout, stderr) => {
						if (err) {
							logError(err)
							return
						}
					})

					logInfo("Done")
				})
			})
		}
	})
	res.end()
}).listen(PORT)

logInfo("Starting server on port " + PORT)
