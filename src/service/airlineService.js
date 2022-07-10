const Airline = require("../models/airline");

const createAirline = async (data) => {
  try {
    const newAirline = { name: data.name, website: data.website };
    const response = await new Airline(newAirline).save();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const updateAirline = async (data) => {
  try {
    const response = await Airline.updateOne({ name: data.name }, data);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const destroyAirline = async (name) => {
  try {
    const response = await Airline.findOneAndDelete(name);
    console.log(response);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const getAirline = async (name) => {
  try {
    console.log(name);
    const response = await Airline.findOne({ name: name });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getAllAirlines = async () => {
  try {
    const response = await Airline.find();
    console.log(response);
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
