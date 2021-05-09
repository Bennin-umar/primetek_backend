const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    city:
    {
    type: String,
      required:true
    }
  },
  {
    timesstamp: true,
  }
);
const Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;
