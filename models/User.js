const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,

      require: true,
    },
    password: {
      type: String,

      require: true,
    },
    roles: {
      type: String,
      enum: ["student", "teacher", "other"],
      default: "student",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", schema);
