import {Request, Response} from "express";
import {
    create,
    findAll,
    findOne,
    update,
    remove
} from "../services/products.service";

import * as Yup from "yup";

const createValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    images: Yup.array().of(Yup.string()).required().min(1),
    price: Yup.number().required(),
    qty: Yup.number().required(),
    categoryId: Yup.string().required(),
});


export default {
    async create(req: Request, res: Response) {
        try {
            await createValidationSchema.validate(req.body);
            const result = await create(req.body);
            res.status(201).json({
                data: result,
                message: "Success create product."
            });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                res.status(400).json({       
                  data: error.errors,        
                  message: "Failed create product",       
                });        
                return;        
              };
            
            const err = error as Error;
            res.status(500).json({
                data: err.message,
                message: "Failed create product."
            });
        }
    },
    async findAll(req: Request, res: Response) {
        try {
            const result = await findAll();

            res.status(200).json({
                data: result,
                message: "Success get all products."
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                data: err.message,
                message: "Failed get all products."
            })
        }
    },
    async findOne(req: Request, res: Response) {
        try {
            const result = await findOne(req.params?.id);

            res.status(200).json({
                data: result,
                message: "Success get one product."
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                data: err.message,
                message: "Failed get one product."
            })
        }
    },
    async update (req: Request, res: Response) {
        try {
            const result = await update(req.params?.id, req.body);

            res.status(200).json({
                data: result,
                message: "Success update product."
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                data: err.message,
                message: "Failed update product."
            })
        }
    },
    async delete (req: Request, res: Response) {
        try {
            const result = await remove(req.params?.id);

            res.status(200).json({
                data: result,
                message: "Success delete product."
            });
        } catch (error) {
            const err = error as Error;

            res.status(500).json({
                data: err.message,
                message: "Failed delete product."
            })
        }
    }
}