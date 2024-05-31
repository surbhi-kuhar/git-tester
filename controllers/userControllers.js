module.exports.getUser = async (req, res) => {
  res.status(200).json({
    message: "reached user controller",
  });
};

module.exports.createUser = async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "user created",
  });
};
