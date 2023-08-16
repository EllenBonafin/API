import { User } from "../../models/users";
import { HttpResponse } from "../protocols";

export interface IGetUserControler {
    handle(): Promise<HttpResponse<User[]>>;
}

export interface IGetUserRepositor{
    getUsers(): Promise<User[]>
}

