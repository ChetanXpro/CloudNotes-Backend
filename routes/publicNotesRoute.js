import { Router } from "express";
import { getUniversity, getUniversityDetails } from "../controllers/publicNotesController.js";
const router = Router();

import verifyJWT from "../middleware/verifyJWT.js";
router.use(verifyJWT);

router.get("/university", getUniversity);
router.post("/university", getUniversityDetails);
export default router;
