const Booking = require("../models/airline");

const createBooking = async (data) => {
  try {
    const newBooking = {
      id: data.id,
      flight: data.flight,
      user: data.user,
      status: data.status,
    };
    const response = await new Booking(newBooking).save();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const cancelBooking = async (Id) => {
  try {
    const response = await Booking.findOneAndDelete({ Id: Id });
    console.log(response);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const boardingPass = async (id) => {
  try {
    //console.log(name);
    const response = await Booking.findOne({ Id: Id })
      .populate("flight")
      .exec();
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createBooking,
  cancelBooking,
  boardingPass,
};
