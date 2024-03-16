const express = require("express");
const { postData, authUser } = require("../service/user.service");
const createToken = require("../helper/jwt");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const data = await postData(name, surname, email, password);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authUser(email, password);
    const token = createToken(data[0]);
    res.cookie("access_token", token, {
      httpOnly: false,
      secure: true,
    });
    res.status(200).send("Success");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
