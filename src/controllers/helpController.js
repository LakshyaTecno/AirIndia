const helpDetails = (req, res) => {
  return res.status(200).send({
    msg: "Successfully hitting the help api",
    success: true,
    data: {
      contact: "919828686876",
    },
  });
};

module.exports = helpDetails;
