import express from 'express'
import {config} from 'dotenv'

config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) =>{
    res.send('HELLO WORD');
})

app.listen(port, () => console.log(`Hello!Port:${port}`))


