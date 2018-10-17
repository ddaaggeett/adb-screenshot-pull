const {
    getScreenshot,
    pullScreenShot,
    deleteImgOnDevice,
    openImage,
} = require('./src/screenshot')
const {
    get_adb_device_list,
} = require('./src/devices')

get_adb_device_list()
.then(deviceList => {
    deviceList.forEach(device => {
        getScreenshot(device)
        .then(data => {
            pullScreenShot(data.image,data.device)
            .then(() => {
                deleteImgOnDevice(data.image,data.device)
                openImage(data.image)
            })
        })
    })
})
