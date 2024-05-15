const testController = (req, res) => {
  res.status(200).send({
    message: "jay mata di",
    success: true,
  });
};

module.exports = { testController };
