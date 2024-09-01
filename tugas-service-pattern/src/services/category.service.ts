import CategoriesModel, { Category } from "../models/categories.model";

export const create = async (payload: Category): Promise<Category> => {
    const result = await CategoriesModel.create(payload);
    return result;
}

export const findAll = async (): Promise<Category[]> => {
    const result = await CategoriesModel.find();
    return result;
}

export const findOne = async (id: String): Promise<Category | null> => {
    const result = await CategoriesModel.findById(id);
    return result;
}

export const update = async (
    id: String,
    payload: Category,   
): Promise<Category | null> => {
    const result = await CategoriesModel.findByIdAndUpdate({_id: id}, payload, { new:true});
    return result;
}

export const remove = async (id: String,): Promise<Category | null> => {
    const result = await CategoriesModel.findByIdAndDelete({_id: id});
    return result
}

