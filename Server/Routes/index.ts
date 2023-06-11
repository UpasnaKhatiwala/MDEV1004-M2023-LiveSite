import express from 'express';
let router = express.Router();
// Get the Movies Controller

import { DisplayMoviesList, DisplayMoviesByID, AddMovies, UpdateMovies, DeleteMovies } from '../Controllers/movies';

/* GET home page. */
router.get('/api', function(req, res, next) {

  console.log(__dirname);
  res.render('index', { title: 'Express' });
});

//List of movies
router.get('/list', function(req, res, next)
{
  DisplayMoviesList(req, res, next);
});

//find the movie by id
router.get('/find/:id', function(req, res, next)
{
  DisplayMoviesByID(req, res, next);
});

//add movie
router.post('/add', function(req, res, next)
{
  AddMovies(req, res, next);
});

//find the movie by id
router.post('/update/:id', function(req, res, next)
{
  UpdateMovies(req, res, next);
});

router.delete('/delete/:id', function(req, res, next)
{
  DeleteMovies(req, res, next);
});

export default router;


