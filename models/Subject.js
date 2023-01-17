const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    universityName: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "University",
    },
    courseName: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PublicNotes", schema);
