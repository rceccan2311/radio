radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(2)
})
radio.setGroup(25)
