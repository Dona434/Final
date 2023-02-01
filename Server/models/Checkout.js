const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema(
  {
    id:{
      type:String,
    },
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    prodId:{
      type:String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    cartQuantity: {
      type: Number,
      required: true,
    },
    //  productPrice:{
    //     type: Number,
    //     required: true,
    // },
     subtotal:{
        type: Number,
        required: true,
    },
    // locality: {
    //   type: Number,
    //   required: true,
    // },
    // pincode: {
    //   type: Number,
    //   required: true,
    // },
    // city: {
    //   type: String,
    //   required: true,
    // },
    // state: {
    //   type: String,
    //   required: true,
    // },
    // landmark: {
    //   type: String,
      
    // },
    // photo:{
    //   type:String
    // }
   
  },
  { timestamps: true }
);
const checkoutModel=mongoose.model("Checkout", CheckoutSchema);
module.exports=checkoutModel;
