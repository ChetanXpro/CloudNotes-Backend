import User from "../models/User.js";
import Note from "../models/Note.js";
import Collection from "../models/Collection.js";
import asyncHandler from "express-async-handler";
import formatBytes from "../config/formateByte.js";
import { getKey, setKey, deleteKey } from "../config/redis.js";
import containerClient from "../config/azureStorage.js";
import { university } from "../data/university.js";

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

export const getUniversity = asyncHandler(async (req, res) => {
  const universityName = [];
  for (const key in university) {
    universityName.push(key);
  }

  res.status(200).json({ universityName });
});

export const getUniversityDetails = asyncHandler(async (req, res) => {
  const { selectedUniversity } = req.body;

  if (!selectedUniversity)
   return res.status(400).json({ message: "please provide valid inputs" });

  const course = university[selectedUniversity]?.course;
  const semester = university[selectedUniversity]?.semester;
  const subject = university[selectedUniversity]?.subject;
  if (!course || !semester || !subject) {
   return res.status(400).json({ message: "please provide valid inputs" });
  }

  res.status(200).json({ course, semester, subject });
});

export default {
  getUniversity,
  getUniversityDetails,
};
