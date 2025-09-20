import { Router } from "express";

export const authRoutes = Router();

authRoutes.get("/", (req, res) => {
  res.send("Hello World");
});