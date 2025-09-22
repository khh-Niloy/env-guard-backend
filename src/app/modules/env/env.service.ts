import { IEnvString } from "./env.interface";
import { Env } from "./env.model";
import { envVars } from "../../config/env";

const storeEnvService = async (payload: IEnvString) => {
  try {
    const newEnvStore = await Env.create(payload);

    const envArray = payload.envs.split("\n").filter(Boolean);

    const response = await fetch(envVars.DOC_URL, {
      method: "POST",
      body: JSON.stringify({
        repoName: payload.repoName,
        githubUrl: payload.githubUrl,
        envs: envArray, // send as array
      }),
      headers: { "Content-Type": "application/json" },
    });
    // console.log("response", response.json());

    return newEnvStore;
  } catch (error) {
    console.log("error on storeEnvService", error);
  }
};

const getEnvService = async (search: string) => {
  // console.log("search", search);
  const searchTerm = search || "";
  const envs = await Env.find({
    repoName: { $regex: searchTerm, $options: "i" },
  });
  // console.log("envs", envs);
  return envs;
};

// const getSingleEnvService = async (id: string) => {
//     const env = await Env.findById(id)
//     return env
// }

const updateEnvService = async (id: string, payload: IEnvString) => {
  const env = await Env.findByIdAndUpdate(id, payload, { new: true });
  return env;
};

const deleteEnvService = async (id: string) => {
  const env = await Env.findByIdAndDelete(id);
  return env;
};

export const envService = {
  storeEnvService,
  getEnvService,
  // getSingleEnvService,
  updateEnvService,
  deleteEnvService,
};
