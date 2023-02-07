const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const StockReq = mongoose.model("stockreq");
const requireLogin = require("../Middleware/requireLogin");
const { route } = require("./auth");

router.post("/stockreq", (req, res) => {
    const {
        productId,
        productName,
        productPrice,
       // productQuantity,
        productState,
        postedBy,
        UserId,
        firstName,
        email,
        phone
      } = req.body;
      if (
        !productId||
        !productName ||
        !productPrice ||
        !productState||
        !postedBy||
        !UserId||
        !firstName||
        !email||
        !phone
      ) {
        return res.status(422).json({ error: "Please add all the details" });
      }
    
      const stockreq = new StockReq({
        productId,
        productName,
        productPrice,
      //  productQuantity,
        productState,
        postedBy:req.user,
        UserId,
        firstName,
        email,
        phone
      });
      stockreq
        .save()
        .then((result) => {
          res.json({ stockreq: result });
        })
        .catch((err) => {
          console.log(err);
        });
    });

    router.get("/allreqs", requireLogin, (req, res) => {
      StockReq.find()
        .populate("postedBy", "_id firstName phone email")
        .then((requests) => {
          res.json({ requests });
        })
        .catch((err) => {
          console.log(err);
        });
    });
    
    
module.exports = router;
