const express=require('express');
const movieRouter=express.Router();
const {addMovie
    //,getallMovies, getMoviesbyId
}=require("../controllers/movie-controller");


movieRouter.post("/",addMovie);
// movieRouter.get('/:id',getMoviesbyId)
// movieRouter.get("/",getallMovies)

module.exports=movieRouter;