"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
router.post('/upload-single', upload.single('photo'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cloudinary_1.default.uploader.upload(req.file.path);
        res.status(200).json({
            message: 'Photo uploaded succesfully.',
            url: result.secure_url
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to upload photo',
            error: error.message || 'An unknown error occurred.',
        });
    }
}));
router.post('/upload-multiple', upload.array('photos', 10), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files || !Array.isArray(req.files)) {
        return res.status(400).json({ message: 'No files uploaded' });
    }
    try {
        const uploadPromises = req.files.map((file) => {
            return cloudinary_1.default.uploader.upload(file.path);
        });
        const results = yield Promise.all(uploadPromises);
        const urls = results.map(result => result.secure_url);
        res.status(200).json({
            message: 'Photos uploaded successfully',
            urls,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to upload photos',
            error: error.message || 'An unknown error occurred.',
        });
    }
}));
exports.default = router;
