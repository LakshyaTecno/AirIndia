const express = require("express");
const router = express.Router();
const airlineConroller = require("../../controllers/airlineController");

const flightConroller = require("../../controllers/flightController");
const helpController = require("../../controllers/helpController");

router.get("/help", helpController);

router.post("/airline", airlineConroller.createAirline);
router.get("/airline/:name", airlineConroller.getAirline);
router.get("/airline", airlineConroller.getAllAirlines);
router.delete("/airline/:name", airlineConroller.deleteAirline);
//router.update("/airline/:name", airlineConroller.updateAirline);

router.post("/flight", flightConroller.createFlight);
router.get("/flight/:flightNumber", flightConroller.getFlight);
router.get("/flight", flightConroller.getAllFlight);
router.delete("/flight/:flightNumber", flightConroller.deleteFlight);
//router.update("/flight/:flightNumber", flightConroller.updateFlight);

module.exports = router;
