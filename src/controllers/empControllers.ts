import { Request, Response } from "express";
import Joi from "joi";
import * as empModel from './../service/crud';

const empSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required()
});

export const CreateEmployee = async(req: Request, res: Response): Promise<void>=> {
    const { error } = empSchema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const {name, email} = req.body;
    try{
        const emp = await empModel.createEmp(name,email);
        res.status(200).json(emp);
    }catch(err) {
        console.log(err);
    }
}
export const getAllEmployees = async(req: Request, res: Response): Promise<void>=> {
    try{
        const allEmps = await empModel.getAllEmp();
        res.status(200).json(allEmps)
    }catch(err) {
        console.log(err);
    }
}
export const getEmpById = async(req: Request, res: Response): Promise<void>=> {
    try{
        const emp = await empModel.getEmpById(parseInt(req.params.id, 10));
        res.status(200).json(emp)
    }catch(err) {
        console.log(err);
    }
}
export const updateEmployee = async(req: Request, res: Response): Promise<void>=>{
    const {name, email} = req.body;
    try{
        const emp = await empModel.updateEmpById(parseInt(req.params.id, 10), name, email);
        res.status(200).json(emp)
    }catch(err) {
        console.log(err);
    }
}
export const deleteEmployee = async(req: Request, res: Response): Promise<void>=> {
    try{
        const emp = await empModel.deleteEmpById(parseInt(req.params.id));
        res.status(200).json(emp)
    }catch(err) {
        console.log(err);
    }
}