It's called Jarvis.

## Physical computer

Jarvis can refer to the physical computer (computers?) that you can ssh into and it runs all our serverside code. This runs everything accessible by a link starting with https://jarvis.psych.purdue.edu/, and it does some other stuff too.

### File locations

`/srv` is where most hosted files live. There are a lot of unused/useless files here.

`/etc/nginx/conf.d/default.conf` You will need to edit this to if you want to change how certain routes on Jarvis are handled. You will probably have to run `nginx -s reload` after updates.

`/etc/nginx/nginx.conf` This is the root config which "includes" the default.conf above.

`/etc/systemd/system` has unit files detailing some services

`/usr/lib/systemd/system` has unit files provided by installed packages

`/etc/mongodb.conf` mongodb conf

`/srv/node_verions` holds different node versions. I don't remember if I did this, but this should be removed once the legacy jarvis app is dead, and docker containers should be used instead.

### Services

`sudo systemctl status **SERVICENAME**.service` will show if a service is running.

`sudo systemctl start mongodb.service` will restart the MongoDB server.

`sudo systemctl start jarvisbackend.service` will restart the Jarvis backend. MongoDB must be running, otherwise various things won't work.

### Github bot

I never ended using it, but the credentials for pcllab-bot and pcllabbot@gmail.com are here.

```
/srv/secrets.md
```

### Webhooks

There are no currently running webhooks. Old code and config can be safely removed.

To set up webhooks, you'll need to edit the `default.conf` to handle a specific route differently. Specifically, you will need to use a [reverse proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) to send a request to NGINX to a server running locally on Jarvis.

Existing examples for setting up a Node.js server to handle this are in [`PCLLAB/website-mkdocs`](https://github.com/PCLLAB/website-mkdocs) and [`PCLLAB/Handbook`](https://github.com/PCLLAB/Handbook). I think these are bad, but it's better than nothing.

Keep in mind when using `child_process.exec`, a new shell is spawned each time `exec` is called, so use `&&` to connect dependent commands.

## App

Jarvis can also refer to app which allows us to record and view data from experiments.

- [https://jarvis.psych.purdue.edu/](https://jarvis.psych.purdue.edu/) and the code is at [PCLLAB/jarvis](https://github.com/PCLLAB/jarvis)

  - This legacy version uses an Angular frontend, Express backend, and a MongoDB database. The code is basically unmaintainable even after significant refactoring. Recommend archiving this repo once no longer needed. There is some "legacy" code in the backend that interfaces with a MySQL database. This is deprecated. The data has been migrated and the MySQL server has not been restarted. This is the cause of some error logging when the Express app is started. Feel free to ignore/refacter the code.

- [https://jarvis.psych.purdue.edu/beta](https://jarvis.psych.purdue.edu/beta) and the code is at [PCLLAB/edith](https://github.com/PCLLAB/edith)

  - The new version uses NextJS and the same MongoDB database. This should eventually be moved to the base url once there is no need to use the legacy app. I called this `edith` but it might also be called `bedi` somewhere since I renamed it.

### Updating Jarvis

#### Legacy App

Pushing to main branch of `pcllab/jarvis` triggers a Github Action that creates a build placed in the `production` branch.

On Jarvis, `/srv/jarvis-prod/` is a clone of the production branch. Running `git pull` updates the code. This updates the client files, but does not restart the running Express server. Running `systemctl restart jarvisbackend` will actually restart the server. It's a good idea to run systemctl status jarvisbackend to check the restart was successful.

`/etc/nginx/conf.d/default.conf` specifies that the files in `/srv/jarvis-prod/client/dist` are served from https://jarvis.psych.purdue.edu

Don't use the `build_and_ship` files. I don't know how they used to work.

#### New App (edith)

This uses docker to avoid having to mess with node versions.

There is a clone of [PCLLAB/edith](https://github.com/PCLLAB/edith) at `/srv/edith`.

Run `git pull` to update files.

```sh title="/srv/edith/"
docker build -t edith .

docker run -e PORT=3333 --network=host -d edith
```

### MongoDB

#### Troubleshooting MongoDB not starting

- Delete `/data/db/mongo.lock` if it exists, this means mongodb did not shutdown properly
- make sure ownership/permissions correct
  - `/tmp/mongodb-27017.sock`
  - `/data/db`
  - `/var/log/mongod`
  - `/etc/rd.d/init.d/mongod`
- `netstat -lntu` to see what ports are in use
  - mongodb is on :27017, jarvis is on 3003

### Misc Issues

#### Changing the static files directory

It looks like I did something wrong with nginx? Although I don't see it being a service. Should look into it. Until this, running the following command on the desired statis file directory (in my case `/srv/jarvis-prod/client/dist`) will allow it to work. The `owner` and `group` might matter, but might not.

`chcon -Rt httpd_sys_content_t /path/to/www`

https://stackoverflow.com/questions/22586166/why-does-nginx-return-a-403-even-though-all-permissions-are-set-properly#answer-26228135

### Running out of disk space

See total
`dh -h`

See for subdirectories
`du -sh ./* | sort -h`

This nuked a 22G /var/lib/docker folder for me
`docker system prune -a -f`
