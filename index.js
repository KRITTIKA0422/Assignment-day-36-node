import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";
import cors from "cors";
dotenv.config();
console.log(process.env.MONGO_URL);
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL;
app.use(cors());
async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connected");
    return client;
}
export const client = await createConnection();
app.get("/", function (request, response) {
    response.send("Welcome to our app");
});
app.use('/movies', moviesRouter)
app.listen(PORT, () => console.log(`App started in ${PORT}`));