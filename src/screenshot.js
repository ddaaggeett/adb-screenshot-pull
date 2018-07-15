const { spawn, exec } = require('child_process')

var imgName = ''

module.exports.getScreenshot = () => {
    imgName = Date.now().toString()
    return new Promise((resolve,reject) => {
        exec('adb shell screencap -p /sdcard/' + imgName + '.png', (err,stdout,stdin) => {
            if(err) process.exit()
            resolve()
        })
    })
}
module.exports.pullScreenShot = () => {
    return new Promise((resolve,reject) => {
        exec('adb pull /sdcard/' + imgName + '.png ' + process.argv[2], (err,stdout,stdin) => {
            if(err) process.exit()
            resolve()
        })
    })
}
module.exports.deleteImgOnDevice = () => {
    return new Promise((resolve,reject) => {
        exec('adb shell rm -rf /sdcard/' + imgName + '.png', (err,stdout,stdin) => {
            if(err) process.exit()
            resolve()
        })
    })
}
