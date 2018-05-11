var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: process.env.ftp_user,  // NOTE that this was username in 1.x
    password: process.env.ftp_password, // optional, prompted if none given
    host: process.env.ftp_host,
    port: 21,
    localRoot: process.env.ftp_localPath,
    remoteRoot: process.env.ftp_remotePath,
    include: ['*', '**/*'],  // upload everything except dot files
    exclude: []
}

// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))

