import {User,UserModel} from '../models/user.model';
function getUser(){}
export async function getAllUsers(){
    const userList=await UserModel.find();
    return userList;
}
export async function getUserById(id:string){
    const user=await UserModel.findById(id);
    return user;
}