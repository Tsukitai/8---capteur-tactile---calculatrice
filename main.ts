let Nombre1 = 0
let Nombre2 = 0
input.onButtonPressed(Button.A, function () {
    Nombre1 = 0
})
input.onButtonPressed(Button.B, function () {
    Nombre2 += 1
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
