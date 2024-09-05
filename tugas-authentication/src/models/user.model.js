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
const mongoose_1 = __importDefault(require("mongoose"));
const encryption_1 = require("../utils/encryption");
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    fullName: {
        type: Schema.Types.String,
        required: true,
    },
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    roles: {
        type: [Schema.Types.String],
        enum: ["admin", "user"],
        default: ["user"],
    },
    profilePicture: {
        type: Schema.Types.String,
        default: "user.jpg",
    },
}, {
    timestamps: true,
});
UserSchema.pre("save", function (next) {
    const user = this;
    user.password = (0, encryption_1.encrypt)(user.password);
    next();
});
UserSchema.pre("updateOne", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this._update;
        user.password = (0, encryption_1.encrypt)(user.password);
        next();
    });
});
UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
