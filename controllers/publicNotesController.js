const User = require("../models/User");
const Note = require("../models/Note");
const Collection = require("../models/Collection");
const asyncHandler = require("express-async-handler");
const formatBytes = require("../config/formateByte");
const { getKey, setKey, deleteKey } = require("../config/redis");

// Create notes
const createNotes = asyncHandler(async (req, res) => {
  const { university, course, semester, subject, name, url, fileSize } =
    req.body;

  if (
    !university ||
    !course ||
    !semester ||
    !subject ||
    !name ||
    !url ||
    !fileSize
  ) {
    res.json({ message: "Please provide all inputs" });
  }


  
  res.status(200).json({ success: true, message: "Note Uploaded" });
});
