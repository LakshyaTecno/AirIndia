const Review = require("../models/review");

const createReview = async (data) => {
  try {
    const newReview = {
      user: data.user,
      comment: data.comment,
      flight: data.flight,
    };
    const response = await new Review(newReview).save();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const updateReview = async (data) => {
  try {
    const response = await Review.updateOne({ user: data.user }, data);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const destroyReview = async (id) => {
  try {
    const response = await Review.findByIdAndDelete(id);
    console.log(response);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};

const getReview = async (user, flight) => {
  try {
    console.log(name);
    const response = await Review.findOne({ user: user, flight: flight });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getAllReview = async (flight) => {
  try {
    const response = await Review.find({ flight: flight });
    console.log(response);
    return response;
  } catch (err) {
    cosole.log(err);
  }
};
module.exports = {
  createReview,
  updateReview,
  destroyReview,
  getReview,
  getAllReview,
};
