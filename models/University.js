const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    universityName: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("University", schema);
