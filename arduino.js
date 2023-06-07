const five = require("johnny-five");
const admin = require("firebase-admin");
const { getDatabase } = require('firebase-admin/database');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://poc-j5-firebase-realtime-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = getDatabase();
const ref = db.ref('device/potentiometer');

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
        ref.set({value})
    })
});