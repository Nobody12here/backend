const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const assingmentRouter = require('./routes/assignmentRoute');
var bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json());
app.use('/assignment', assingmentRouter);

async function MongoConnect() {
    await mongoose.connect('mongodb+srv://uraja01212:jYbUbFjHffkkdnRg@assingmentcluster.qppe5ha.mongodb.net/?retryWrites=true&w=majority')
}

app.get("/", (req, res) => {
    res.send('Hello world!');
})

app.listen(port, async () => {
    MongoConnect().catch((error) => console.error(error))
    console.log(`Listening to port ${port}`)
})