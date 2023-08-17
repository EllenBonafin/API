// import { IGetUserRepositor } from "../../controllers/get-users/protocols";
// import { MongoClient } from "../../database/mongo";
// import { User } from "../../models/users";

import { IcreateUserRepositor, creatUserParams } from "../../controllers/creat-users/protocolos";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";

// export class MongoGetUsersRepositor implements IGetUserRepositor {
//   async getUsers(): Promise<User[]> {
//     const users = await MongoClient.db
//       .collection<Omit<User, "id">>("users")
//       .find({})
//       .toArray();

//     return users.map(({ _id, ...rest }) => ({
//       ...rest,
//       id: _id.toHexString(),
//     }));
//   }
// }

export class MongoCreatUser implements IcreateUserRepositor{
   async creatUser(params: creatUserParams): Promise<User> {
        const {insertedId} = await MongoClient.db.collection('users').insertOne(params)

        const user = await MongoClient.db.collection<Omit<User, 'id'>>('users').findOne({_id: insertedId});

        if(!user){
            throw new Error('User not created')
        }

        const {_id, ...rest} = user

        return {id: _id.toHexString(), ...rest}
    }


}