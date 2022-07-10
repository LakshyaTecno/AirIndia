const FlightService = require("../service/flightService");

const createFlight = async (req, res) => {
  try {
    const flight = await FlightService.createFlight(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully created flight",
      data: flight,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const updateFlight = async (req, res) => {
  try {
    const flight = await FlightService.updateFlight(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully Updated flight",
      data: flight,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const deleteFlight = async (req, res) => {
  try {
    const flight = await FlightService.destroyFlight(req.params.name);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted flight",
      data: flight,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getFlight = async (req, res) => {
  try {
    const flight = await FlightService.getFlight(req.params.name);
    // console.log(req.params.name);
    res.status(200).json({
      success: true,
      message: "Successfully fetched flight",
      data: flight,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getAllFlight = async (req, res) => {
  try {
    const flights = await FlightService.getAllFlight();
    res.status(200).json({
      success: true,
      message: "Successfully Get flights",
      data: flights,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

module.exports = {
  createFlight,
  deleteFlight,
  updateFlight,
  getFlight,
  getAllFlight,
};
