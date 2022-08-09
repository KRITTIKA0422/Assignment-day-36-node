import { client } from "../index.js";

export async function deletemovie(id) {
    return await client.db("app_movie").collection("movies").deleteOne({ id: id });
}
export async function getmovies(request) {
    return await client.db("app_movie").collection("movies").find(request.query).toArray();
}
export async function updatemovie(id, data) {
    return await client.db("app_movie").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function createmovies(data) {
    return await client.db("app_movie").collection("movies").insertMany(data);
}
export async function getmoviebyid(id) {
    return await client.db("app_movie").collection("movies").findOne({ id: id });
}
