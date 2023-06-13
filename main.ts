radio.onReceivedString(function (receivedString) {
    if (receivedString == "S") {
        joystickbit.Vibration_Motor(500)
    }
})
radio.setGroup(33)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Cow)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 700 && joystickbit.getRockerValue(joystickbit.rockerType.X) > 300 && joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendString("forward")
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 700 && joystickbit.getRockerValue(joystickbit.rockerType.X) > 300 && joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendString("backward")
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 700 && joystickbit.getRockerValue(joystickbit.rockerType.Y) > 300 && joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendString("left")
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 700 && joystickbit.getRockerValue(joystickbit.rockerType.Y) > 300 && joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendString("right")
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("take off")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("landing")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendString("Turn left")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendString("down")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendString("up")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendString("Turn right")
    } else {
        radio.sendString("null")
    }
})
