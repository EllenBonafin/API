import express from 'express'
import {config} from 'dotenv'
import { GetUserControler } from './controllers/get-users/get-users'
import { MongoGetUsersRepositor } from './repositoires/get-users/mongo-get-users'
import { MongoClient } from './database/mongo'

const main = async () => {
    config();
    const app = express();

    await MongoClient.connect() 
    
    app.get("/users", async (req, res) => {
    const mongoGetUsersRepositor = new MongoGetUsersRepositor();
    const getUserControler = new GetUserControler(mongoGetUsersRepositor);

    const { body, statusCode } = await getUserControler.handle();

    res.send(body).status(statusCode);
    });

    const port = process.env.PORT;
    app.listen(port, () => console.log(`Hello!Port:${port}`));
}

main()



