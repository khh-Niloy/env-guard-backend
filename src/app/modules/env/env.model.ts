import { Schema, model } from "mongoose";
import { IEnvString } from "./env.interface";

const envStringSchema = new Schema<IEnvString>({
    repoName: { type: String, required: true },
    githubUrl: { type: String, required: true },
    envs: { type: String, required: true },
}, { timestamps: true , versionKey: false});

export const Env = model<IEnvString>("Env", envStringSchema);