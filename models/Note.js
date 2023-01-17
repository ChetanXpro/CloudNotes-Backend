const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    collectionID: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Collection",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    blobName: { type: String, require: true },
    size: { type: String, require: true },
    url: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", schema);
