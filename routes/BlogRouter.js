import { Router } from "express";
import { authenticateMiddleware } from "../auth/JwtManager.js";
import { createBlogController } from "../blog/BlogController.js";

const router = Router();

router.use(authenticateMiddleware);

/**
 * Creates a new Post
 * Only authenticated users can access it.
 */
router.post("/create", createBlogController);

export default router;
