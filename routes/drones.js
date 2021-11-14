const express = require("express");
const router = express.Router();
const Drone = require("./../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({}).then((dbDrones) => {
    res.render("drones/list", {
      DroneList: dbDrones,
    });
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({
    name,
    propellers,
    maxSpeed,
  })
    .then((newDron) => {
      console.log(newDron);
      res.redirect("/drones");
    })
    .catch((e) => console.log(e));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      console.log(drone);
      res.render("drones/update-form", drone);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;
  Drone.findByIdAndUpdate(id, {
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed,
  })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((e) => console.log(e));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => {
      console.log("Drone removed");
      res.redirect("/drones");
    })
    .catch((e) => console.log(e));
});

module.exports = router;
