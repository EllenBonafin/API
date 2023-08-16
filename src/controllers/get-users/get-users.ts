import { IGetUserControler, IGetUserRepositor } from "./protocols";

export class GetUserControler implements IGetUserControler{
        constructor(private readonly getUsrersRepositor: IGetUserRepositor){} 
   async handle(){
        try {
        //req validation
        // direction calls for repositor
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const users = await this.getUsrersRepositor.getUsers()

        return {
            statusCode: 200,
            body: users,
        };
        } catch (error) {

            return{
             statusCode: 500,
            body: "Error",
            };
        }

    }
}