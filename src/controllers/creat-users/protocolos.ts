import { User } from "../../models/users"

export interface creatUserParams{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}

export interface IcreateUserRepositor{
    creatUser(params: creatUserParams): Promise<User>;
}