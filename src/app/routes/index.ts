import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { envRoutes } from "../modules/env/env.route";


export const routes = Router();

const allRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/env",
    route: envRoutes,
  },
];

allRoutes.forEach(({ path, route }) => routes.use(path, route));
