const express = require("express");
const Students = require("../models/student.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Students.find();
    return res.status(200).send({ data });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Students.create(req.body);
    console.log(data);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Students.findById(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Students.findOneAndDelete({ _id: req.params.id })
      .lean()
      .exec();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
