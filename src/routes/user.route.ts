import { Router } from "express";
import { UserModel } from "../models/user.model";
export const UserRouter = Router();

UserRouter.post("/", (req, res) => {
    res.send("user created successfully");
}
)
UserRouter.get("/", (req, res) => {
    res.send("user get successfully");
})
UserRouter.delete("/:id", (req, res) => {
    res.send("user deleted successfully");
})
UserRouter.put("/:id", (req, res) => {
    res.send("user updated successfully");
})