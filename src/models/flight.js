const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    departureAirport: {
      type: String,
      required: true,
    },
    arrivalAirport: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    airline: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Airline",
    },
    departureTime: {
      type: String,
    },
    arrivalTime: {
      type: String,
    },
    flightNumber: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    boardingGate: {
      type: Number,
    },
  },
  { timeStamps: true }
);

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
