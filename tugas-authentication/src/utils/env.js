"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = exports.DATABASE_URL = exports.CLOUDINARY_CLOUD_NAME = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
exports.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
exports.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
exports.DATABASE_URL = process.env.DATABASE_URL || "";
exports.SECRET = process.env.SECRET || "secret";
