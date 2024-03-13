const express = require("express");
const {postData}=require('../service/user.service')

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

module.exports = router;
