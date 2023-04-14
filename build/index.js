"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const vintageCrypt = {
    acid: "",
    hash: function (password) {
        if (!password) {
            console.log("The value of password must be provided");
        }
        const acidTemplate = "xxxxxxxx/xxxx?6xxx%yxxx*xxxxxxxxxxxx";
        let result = "";
        for (let i = 0; i < acidTemplate.length; i++) {
            const c = acidTemplate.charAt(i);
            if (c === "x" || c === "y") {
                const r = Math.floor(Math.random() * 16);
                const v = c === "x" ? r : (r & 0x3) | 0x8;
                result += v.toString(16);
            }
            else {
                result += c;
            }
        }
        let hashedPassword = crypto_1.default.createHash("sha256");
        hashedPassword.update(password + result);
        this.acid = result;
        return hashedPassword.digest("hex");
    },
    verify: function (password, hash) {
        if (!password || !hash) {
            console.log("The values of password and hash(from the database) must be provided");
        }
        let hashedPassword = crypto_1.default.createHash("sha256");
        hashedPassword.update(password + this.acid);
        return hashedPassword.digest("hex") === hash;
    },
};
module.exports = vintageCrypt;
