const AirlineService = require("../service/airlineService");

const createAirline = async (req, res) => {
  try {
    const airline = await AirlineService.createAirline(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully created airline",
      data: airline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const updateAirline = async (req, res) => {
  try {
    const airline = await AirlineService.updateAirline(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully Updated airline",
      data: airline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const deleteAirline = async (req, res) => {
  try {
    const airline = await AirlineService.destroyAirline(req.params.name);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted airline",
      data: airline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getAirline = async (req, res) => {
  try {
    const airline = await AirlineService.getAirline(req.params.name);
    console.log("@@@@@@@@@");
    console.log(req.params);
    console.log("@@@@@@@@@");
    res.status(200).json({
      success: true,
      message: "Successfully fetched airline",
      data: airline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getAllAirlines = async (req, res) => {
  try {
    const airlines = await AirlineService.getAllAirlines();
    res.status(200).json({
      success: true,
      message: "Successfully Get airline",
      data: airlines,
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
  createAirline,
  deleteAirline,
  updateAirline,
  getAirline,
  getAllAirlines,
};
