"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.post("/", (req, res) => {
    res.send("user created successfully");
});
exports.UserRouter.get("/", (req, res) => {
    res.send("user get successfully");
});
exports.UserRouter.delete("/:id", (req, res) => {
    res.send("user deleted successfully");
});
exports.UserRouter.put("/:id", (req, res) => {
    res.send("user updated successfully");
});
