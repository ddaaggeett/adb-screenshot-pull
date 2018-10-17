const { spawn, exec } = require('child_process')
var fs = require('fs')

module.exports.getScreenshot = (device) => {
    const image = Date.now() + '_' + device + '.png'
    return new Promise((resolve,reject) => {
        exec('adb -s ' + device + ' shell screencap -p /sdcard/' + image, (err,stdout,stdin) => {
            if(err) process.exit()
            resolve({image,device})
        })
    })
}
module.exports.pullScreenShot = (image,device) => {
    return new Promise((resolve,reject) => {
        exec('adb -s ' + device + ' pull /sdcard/' + image + ' ' + process.argv[2], (err,stdout,stdin) => {
            if(err) process.exit()
            resolve()
        })
    })
}
module.exports.deleteImgOnDevice = (image,device) => {
    return new Promise((resolve,reject) => {
        exec('adb -s ' + device + ' shell rm -rf /sdcard/' + image, (err,stdout,stdin) => {
            if(err) process.exit()
            resolve()
        })
    })
}
module.exports.openImage = (image) => {
    const imageFile = 'imgs/' + image
    var flag = true
    while(flag) {
        if(fs.existsSync(imageFile)) {
            flag = false
            exec('open ' + imageFile, (err,stdout,stdin) => {
                if(err) process.exit()
            })
        }
    }
}
