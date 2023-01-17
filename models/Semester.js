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
    semester: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Semester", schema);