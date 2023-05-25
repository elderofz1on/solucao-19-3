let brilho_led2 = 0
let brilho_led1 = 0
led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && brilho_led1 != 1023) {
        brilho_led1 = brilho_led1 + 1
        pins.analogWritePin(AnalogPin.P2, brilho_led1)
        control.waitMicros(10)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && brilho_led1 != 0) {
        brilho_led1 = brilho_led1 - 1
        pins.analogWritePin(AnalogPin.P2, brilho_led1)
        control.waitMicros(10)
    }
    if (pins.digitalReadPin(DigitalPin.P4) == 1 && brilho_led2 != 0) {
        brilho_led2 = brilho_led2 - 1
        pins.analogWritePin(AnalogPin.P3, brilho_led2)
        control.waitMicros(10)
    }
    if (pins.digitalReadPin(DigitalPin.P4) == 0 && brilho_led2 != 1023) {
        brilho_led2 = brilho_led2 + 1
        pins.analogWritePin(AnalogPin.P3, brilho_led2)
        control.waitMicros(10)
    }
})
