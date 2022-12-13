irVS1838.onIrButton(IrButton.Num1, IrButtonAction.Pressed, function () {
    basic.showNumber(1)
})
irVS1838.onIrButton(IrButton.Num4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
irVS1838.onIrButton(IrButton.Num3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
irVS1838.onIrButton(IrButton.Num2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
irVS1838.onIrButton(IrButton.Num5, IrButtonAction.Pressed, function () {
	
})
basic.showIcon(IconNames.Yes)
irVS1838.connectIrReceiver(DigitalPin.P1)
let input2 = 0
let digit = 0
