import { IEnvString } from "./env.interface";
import { Env } from "./env.model";

const storeEnvService = async (payload: IEnvString) => {
    const newEnvStore = await Env.create(payload)
    return newEnvStore
}

const getEnvService = async () => {
    const envs = await Env.find()
    return envs
}

const getSingleEnvService = async (id: string) => {
    const env = await Env.findById(id)
    return env
}

const updateEnvService = async (id: string, payload: IEnvString) => {
    const env = await Env.findByIdAndUpdate(id, payload, { new: true })
    return env
}

const deleteEnvService = async (id: string) => {
    const env = await Env.findByIdAndDelete(id)
    return env
}

export const envService = {
    storeEnvService,
    getEnvService,
    getSingleEnvService,
    updateEnvService,
    deleteEnvService
}