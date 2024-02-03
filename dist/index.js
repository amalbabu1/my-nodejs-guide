"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const SERVER_PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("API is available !!");
});
const startServer = () => {
    try {
        app.listen(SERVER_PORT, () => {
            console.log(`Server started at the Port http://localhost:${SERVER_PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
