// const http = require('http');

// const hostname = 'localhost';
// const port = '4000'

// const server = http.createServer((req, res) => {
//     res.end('Hello from node js')
// })

// server.listen(port , hostname , () => {
//     console.log(`server is running on http://${hostname}:${port}`)
// })

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT

const app = express();

app.use(cors())

app.get('/', (req , res) => {
    const courses = [
        {
            id : 1,
            courseName : 'MERN'
        },
        {
            id : 2,
            courseName : 'MEAN'
        },
        {
            id : 3,
            courseName : 'MERP'
        }

    ]
    res.send(courses)

    // res.send('Hello from express server')
})

app.get('/services', (req , res) => {
    res.send('Hello from services page')
})


app.listen(port, () => {
    console.log(`server is running on http://${hostname}:${port}`)
})