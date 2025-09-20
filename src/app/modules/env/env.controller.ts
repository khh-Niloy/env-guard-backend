import { envService } from "./env.service";
import { IEnvString } from "./env.interface";
import { Request, Response } from "express";

const storeEnv = async (req: Request, res: Response) => {
    try {
        console.log("req.body", req.body);
        const result = await envService.storeEnvService(req.body as IEnvString);
        res.status(200).json({
            success: true,
            message: "Env stored successfully",
            result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Env stored failed",
            error
        })
    }
}

const getEnv = async (req: Request, res: Response) => {
    try {
        const result = await envService.getEnvService();
        res.status(200).json({
            success: true,
            message: "Env fetched successfully",
            result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Env fetched failed",
            error
        })
    }
}

const getSingleEnv = async (req: Request, res: Response) => {
    try {
        const result = await envService.getSingleEnvService(req.params.id);
        res.status(200).json({
            success: true,
            message: "Env fetched successfully",
            result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Env fetched failed",
            error
        })
    }
}

const updateEnv = async (req: Request, res: Response) => {
    try {
        const result = await envService.updateEnvService(req.params.id, req.body as IEnvString);
        res.status(200).json({
            success: true,
            message: "Env updated successfully",
            result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Env updated failed",
            error
        })
    }
}

const deleteEnv = async (req: Request, res: Response) => {
    try {
        const result = await envService.deleteEnvService(req.params.id);
        res.status(200).json({
            success: true,
            message: "Env deleted successfully",
            result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Env deleted failed",
            error
        })
    }
}

export const envController = {
    storeEnv,
    getEnv,
    getSingleEnv,
    updateEnv,
    deleteEnv
}