const ReviewService = require("../service/reviewService");

const createReview = async (req, res) => {
  try {
    const review = await ReviewService.createReview(req.body);
    console.log(review);
    res.status(200).json({
      success: true,
      message: "Successfully created review",
      data: review,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const review = await ReviewService.updateReview(req.body);
    res.status(200).json({
      success: true,
      message: "Successfully Updated review",
      data: review,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await ReviewService.destroyReview(req.params.id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted review",
      data: review,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getReview = async (req, res) => {
  try {
    const review = await ReviewService.getReview(
      req.params.userId,
      req.param.flightId
    );
    // console.log(req.params.name);
    res.status(200).json({
      success: true,
      message: "Successfully fetched review",
      data: review,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewService.getAllReview(req.param.flightId);
    res.status(200).json({
      success: true,
      message: "Successfully Get reviews",
      data: reviews,
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
  createReview,
  deleteReview,
  updateReview,
  getReview,
  getAllReviews,
};
