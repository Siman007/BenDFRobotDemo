input.onSound(DetectedSound.Loud, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (stop == 0) {
        stop = 1
    } else {
        stop = 0
    }
})
let u = 0
let stop = 0
stop = 0
basic.clearScreen()
basic.showString("3")
basic.showNumber(2)
basic.showNumber(1)
basic.pause(2000)
basic.showString("GO!")
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (stop == 1) {
        basic.showIcon(IconNames.Heart)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else {
        u = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (u < 20) {
            basic.showIcon(IconNames.No)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            basic.pause(500)
            music.stopAllSounds()
            if (Math.randomBoolean()) {
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            } else {
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            }
            basic.pause(500)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        } else {
        	
        }
        basic.showIcon(IconNames.Happy)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(100)
    }
})
