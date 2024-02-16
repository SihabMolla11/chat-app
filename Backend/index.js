import dotenv from 'dotenv';
import express from 'express';
import connectToMongodb from './connect.database.js';
import router from './routes.js';

const app = express();
dotenv.config()
const port = process.env.PORT || 5000;




// middle ware
app.use(express.json());



app.get("/", (req, res) => {
    console.log("Request received at /");
    res.send("Hello Bangladesh");
});

app.use('/api', router);



app.listen(port, () => {
    connectToMongodb();
    console.log("Server is running on Port " + port);
});
