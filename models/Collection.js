const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    title: {
      type: String,
      require: true,
    },
    totalNotesInside: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Collection", schema);
