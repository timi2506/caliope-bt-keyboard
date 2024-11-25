input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    keyboard.sendString("Hallo Thorge du bist gehackt")
})
basic.forever(function () {
    keyboard.startKeyboardService()
})
