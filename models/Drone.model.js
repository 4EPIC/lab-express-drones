// Iteration #1
const mongoose = require("mongoose");

const dronSchema = mongoose.Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
    timestamps: true,
  }
);

const Drone = mongoose.model("Drone", dronSchema);

module.exports = Drone;
