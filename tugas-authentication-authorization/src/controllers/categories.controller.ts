import { Request, Response } from "express";
import {
    create,
    findAll,
    findOne,
    update,
    remove
} from "../services/categories.service";

import * as Yup from "yup";

const createValidationSchema = Yup.object().shape({
    name: Yup.string().required()
});

export default {
    async create(req: Request, res: Response) {
        try {
            await createValidationSchema.validate(req.body);
            const result = await create(req.body);

            res.status(201).json({
                data: result,
                message: "Success create category."
            });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                res.status(400).json({       
                  data: error.errors,        
                  message: "Failed create category",       
                });        
                return;        
              };
            
            const err = error as Error;
            res.status(500).json({
                data: err.message,
                message: "Failed create category."
            });
        }
    },
    async findAll(req: Request, res: Response) {
        try {
            const result = await findAll();

            res.status(200).json({
                data: result,
                message: "Success get all categories."
            });
        } catch(error) {
            const err = error as Error;

            res.status(500).json({
                data: err.message,
                message: "Failed get all categories."
            });
        }
    },
    async findOne(req: Request, res: Response) {
        try {
            const result = await findOne(req.params?.id);

            res.status(200).json({
                data: result,
                message: "Success get category."
            })
        } catch(error) {
            const err = error as Error;

            res.status(500).json({
                data: err.message,
                message: "Failed get category."
            });
        }
    },
    async update(req: Request, res: Response) {
        try {
          const result = await update(req.params?.id, req.body);
    
          res.status(200).json({
            data: result,
            message: "Success update category",
          });
        } catch (error) {
          const err = error as Error;
          res.status(500).json({
            data: err.message,
            message: "Failed update category",
          });
        }
      },
    async delete(req: Request, res: Response) {
        try {
            const result = await remove(req.params?.id);

            res.status(200).json({
                data: result,
                message: "Success delete category."
            });
        } catch(error) {
            const err = error as Error;

            res.status(500).json({
                data: err.message,
                message: "Failed delete category."
            });
        }
    }
}
