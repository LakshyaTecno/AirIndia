const Flight = require("../models/flight");

const createFlight = async (data) => {
  try {
    const newFlight = {
      departureAirport: data.departureAirport,
      arrivalAirport: data.arrivalAirport,
      duration: data.duration,
      flightDate: data.flightDate,
      departureTime: data.departureTime,
      arrivalTime: data.arrivalTime,
      flightNumber: data.flightNumber,
      price: data.price,
      airline: data.airlineId,
    };

    const response = await new Flight(newFlight).save();
    return response;
  } catch (err) {
    console.log(err);
  }
};

const updateFlight = async (data) => {
  try {
    const response = Flight.updateOne(
      { flightNumber: data.flightNumber },
      data
    );
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const destroyFlight = async (flightNumber) => {
  try {
    const response = Flight.findOneAndDelete({ flightNumber: flightNumber });
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const getFlight = async (flightNumber) => {
  try {
    const response = Flight.findOne({ flightNumber: flightNumber });
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const getAllFlight = async (data) => {
  try {
    console.log(data);
    let response;
    if (data.price && data.sort) {
      if (data.sort == "inc") {
        response = await Flight.find().sort("price");
      } else {
        response = await Flight.find().sort("-price");
      }
    } else if (data.duration && data.sort) {
      response = await Flight.find().sort("duration");
    } else {
      response = await Flight.find();
    }
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// const getAllFlight = async (data) => {
//   try {
//     //  let response;
//     //   if (data.price && data.sort) {
//     //     response = await Flight.find().sort("price");
//     //   } else if (data.duration && data.sort) {
//     //     response = await Flight.find().sort("duration");
//     //   } else {
//     //     response = await Flight.find();
//     //   }

//     const response = await Flight.find();
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// };
module.exports = {
  createFlight,
  updateFlight,
  destroyFlight,
  getFlight,
  getAllFlight,
};
