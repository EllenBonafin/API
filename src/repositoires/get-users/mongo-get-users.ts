import { IGetUserRepositor } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";

export class MongoGetUsersRepositor implements IGetUserRepositor{
    async getUsers(): Promise<User[]> {
        const users = await MongoClient.db.collection<Omit<User, "id">>('users').find({}).toArray();

        return users.map(({_id, ...rest}) => ({ ... rest, id: _id.toHexString(),}))
    }
}

// -- Roda com postgres 
// export class MongoGetUsersRepositor implements IGetUserRepositor {
//   async getUsers(): Promise<User[]> {
//     return [
//       {
//         firstName: "Ellen",
//         lastName: "Bonafin",
//         email: "blablabla",
//         password: "1234",
//       },
//     ];
//   }
// }