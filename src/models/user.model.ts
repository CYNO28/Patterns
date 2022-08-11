import { Schema, model } from "mongoose";
export type User = {
  name: string;
  email: string;
  profilepic: string;
  karma: number;
};

const userSchema = new Schema<User>({
    name:String,
    profilepic:String,
    email:String,
    karma:Number,
})
export const UserModel = model("user", userSchema);
