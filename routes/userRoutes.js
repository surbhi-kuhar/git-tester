const express = require("express");
const router = express.Router();
const { getUser,createUser } = require("../controllers/userControllers.js");

router.get("/", getUser);
router.post("/create",createUser);

module.exports = router;
