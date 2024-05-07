input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    mp3Player.execute(
    mp3Player.playType.Stop
    )
})
input.onButtonPressed(Button.A, function () {
    mp3Player.execute(
    mp3Player.playType.PlayPrevious
    )
})
input.onButtonPressed(Button.AB, function () {
    mp3Player.execute(
    mp3Player.playType.Pause
    )
})
input.onButtonPressed(Button.B, function () {
    mp3Player.execute(
    mp3Player.playType.PlayNext
    )
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    mp3Player.execute(
    mp3Player.playType.Play
    )
})
mp3Player.MP3SetSerial(SerialPin.P1)
let i = 20
basic.forever(function () {
    PlanetX_Basic.setVolume(i)
    led.plotBarGraph(
    input.soundLevel(),
    150
    )
})
