// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drone.create(drones)
  .then(() => console.log(`Created ${drones.length} drones`))
  .catch((e) => console.log(e));
mongoose.connection.close;
