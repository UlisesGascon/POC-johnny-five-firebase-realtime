const five = require("johnny-five");

const board = new five.Board();

board.on("ready", () => {
    // HW Definition
    const potentiometer = new five.Sensor("A0");

    // HW Usage
    potentiometer.on("change", () => {
        const {value, raw} = potentiometer;
        console.log("Sensor: ");
        console.log("  value  : ", value);
        console.log("  raw    : ", raw);
        console.log("-----------------");
    })
});