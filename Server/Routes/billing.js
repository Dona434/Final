const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Billing = mongoose.model("billing");
//const requireLogin = require("../Middleware/requireLogin");


router.post("/billingdetails", (req, res) => {
  const {
    address,
    locality,
    pincode,
    city,
    state,
    landmark
  } = req.body;
  if (
    !address ||
    !locality ||
    !pincode||
    !city||
    !state||
    !landmark
  ) {
    return res.status(422).json({ error: "Please add all the details" });
  }

  const billing = new Billing({
    address,
    locality,
    pincode,
    city,
    state,
    landmark
  });
  billing
    .save()
    .then((result) => {
      res.json({ billing: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
