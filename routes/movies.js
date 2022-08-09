import express from "express";
import { getmoviebyid, createmovies, updatemovie, getmovies, deletemovie } from "./helper.js";
const router=express.Router();
router.get("/:id", async function (request, response) {
    const { id } = request.params;
    console.log(request.params, id);
    const movie = await getmoviebyid(id);
    console.log(movie);
    movie ? response.send(movie) : response.send({ msg: "Movie not found" });
});

router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);
    const result = await createmovies(data);
    console.log(result);
    response.send(result);
});
router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data=request.body;
    console.log(data);
    const result = await updatemovie(id, data);
    console.log(result);
  response.send(result);
});
router.get("/", async function (request, response) {
    if(request.query.rating){
        request.query.rating=+request.query.rating;
    }
    console.log(request.query);
    const movies = await getmovies(request);
    response.send(movies);
});
router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    console.log(request.params, id);
    const result = await deletemovie(id);
    console.log(result);
    result.deletedCount>0 ? response.send({msg:"Movie deleted successfully"}) : response.send({ msg: "Movie not found" });
});
export const moviesRouter= router;


