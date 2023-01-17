const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    size: { type: String, require: true },
    url: {
      type: String,
      require: true,
    },
    university: {
      type: String,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
    semester: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    uploadedBy: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PublicNotes", schema);
