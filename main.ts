let distancia = 0
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.clearScreen()
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    Tinybit.RGB_Car_Program().show()
    distancia = Tinybit.Ultrasonic_Car()
    if (distancia < 10) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 0)
        basic.pause(200)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
    }
    if (input.soundLevel() > 120) {
        basic.pause(5000)
    }
})
