import { Router } from "express";
import { envController } from "./env.controller";

export const envRoutes = Router();

// Define routes with env@env/ prefix
envRoutes.post("/store-env", envController.storeEnv);
envRoutes.get("/get-envs", envController.getEnv);
// envRoutes.get("/single-env/:id", envController.getSingleEnv);
envRoutes.patch("/update-env/:id", envController.updateEnv);
envRoutes.delete("/delete-env/:id", envController.deleteEnv);
