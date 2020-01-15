const fs = require("fs")
const http = require("http")
const crypto = require("crypto")
const exec = require("child_process").exec
const SECRET = require("./config").token
const DEST_FOLDER = require("./config").destFolder
const PORT = require("./config").PORT

function log(data) {
	const message = `[${new Date().toISOString()}] ${data}`

	console.log(message)
	fs.appendFileSync("./log.txt", data, { flag: "wx" }, function(err) {
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
		const body = JSON.parse(chunk)
		const isMaster = body?.ref === "refs/heads/master"
		if (isAllowed && isMaster) {
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

					command = "cp -r ../site/ " + DEST_FOLDER
					logInfo(`Running: ${command}`)
					exec(command, (err, stdout, stderr) => {
						if (err) {
							logError(err)
							return
						}
					})
				})
			})
		}
	})
	res.end()
}).listen(PORT)

logInfo("Starting server on port " + PORT)
