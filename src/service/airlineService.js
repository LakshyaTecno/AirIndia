const Airline = require("../models/airline");

const createAirline = async (data) => {
  try {
    const newAirline = { name: data.name, website: data.website };

    const response = await new Airline(newAirline).save();
    return response;
  } catch (err) {
    console.log(err);
  }
};

const updateAirline = async (data) => {
  try {
    const response = Airline.updateOne({ name: data.name }, data);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const destroyAirline = async (name) => {
  try {
    const response = Airline.findOneAndDelete({ name: name });
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const getAirline = async (name) => {
  try {
    const response = Airline.findOne({ name: name });
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const getAllAirlines = async () => {
  try {
    const response = Airline.find();
    return response;
  } catch (err) {
    cosole.log(err);
  }
};
module.exports = {
  createAirline,
  updateAirline,
  destroyAirline,
  getAirline,
  getAllAirlines,
};
