const { getScreenshot, pullScreenShot, deleteImgOnDevice } = require('./src/screenshot')

getScreenshot().then(() => {
    pullScreenShot().then(() => {
        deleteImgOnDevice()
    })
})
