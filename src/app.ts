import express, { Request, Response } from "express";
import { routes } from "./app/routes";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "https://env-guard-frontend.vercel.app"],
  credentials: true,
}));


app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "welcome to env guard backend",
  });
});