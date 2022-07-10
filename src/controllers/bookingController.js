const BookingService = require("../service/bookingService");

const createBooking = async (req, res) => {
  try {
    const booking = await BookingService.createBooking(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully created booking",
      data: booking,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getBoardingPass = async (req, res) => {
  try {
    const booking = await BookingService.getBoardingPass(req.query.Id);

    res.status(200).json({
      success: true,
      message: "Successfully fetched booking",
      data: booking,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const booking = await BookingService.cancelBooking(req.query.id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted booking",
      data: booking,
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
  createBooking,
  cancelBooking,
  getBoardingPass,
};
