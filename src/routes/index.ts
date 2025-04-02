import {Router} from "express";
import {health,getApplications, getApplicationsBySearch} from "../controllers/index";
const router = Router()

router.get("/health", health)
router.get("/applications/search", getApplicationsBySearch);

router.get("/applications", getApplications);


export default router;