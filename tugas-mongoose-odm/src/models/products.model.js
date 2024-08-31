"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Schema.Types.Number,
        required: true,
        min: [1, "Minimal qty adalah 1."]
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
}, {
    timestamps: true,
});
const ProductsModel = mongoose_1.default.model("Products", ProductsSchema);
exports.default = ProductsModel;
