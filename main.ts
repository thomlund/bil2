maqueenPlusV2.I2CInit()
matrixLidarDistance.getData()
basic.forever(function () {
    basic.showNumber(maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14))
})
