import { Request, Response, NextFunction } from 'express';

import Movies from '../Models/movies';

function SanitizeArray(unsanitizedArray: string[]): string[]
{
    let sanitizedArray: string[] = Array<string>();
    for (const unsanitizedString of unsanitizedArray)
    {
        sanitizedArray.push(unsanitizedString.trim());
    }
    return sanitizedArray;
}

export function DisplayMoviesList(req: Request, res: Response, next: NextFunction): void
{
    Movies.find({})
    .then(function(data)
    {
        res.status(200).json(data);
    })
    .catch(function(err)
    {
        console.error(err);
    });
}

export function DisplayMoviesByID(req: Request, res: Response, next: NextFunction): void
{
   let id = req.params.id;
   Movies.findById({_id: id})
   .then(function(data)
   {
    res.status(200).json(data)
   })
   .catch(function(err)
   {
    console.error(err);
   });
}

export function AddMovies(req: Request, res: Response, next: NextFunction): void
{

   let genres = SanitizeArray((req.body.genres as string).split(","));
   let directors = SanitizeArray((req.body.directors as string).split(","));
   let writers = SanitizeArray((req.body.writers as string).split(","));
   let actors = SanitizeArray((req.body.actors as string).split(","));
   

   let movies = new Movies({
        movieID: req.body.movieID,
        title: req.body.title,
        studio: req.body.studio,
        genres: genres,
        directors: directors,
        writers: writers,
        actors: actors,
        length: req.body.length,
        year: req.body.year,
        shortDescription: req.body.shortDescription,
        mpaRating: req.body.mpaRating,
        criticsRating: req.body.criticsRating

   });
   Movies.create(movies)
   .then(function()
   {
    res.json(movies);
   })
   .catch(function(err)
   {
    console.error(err);
   });

}

export function UpdateMovies(req: Request, res: Response, next: NextFunction): void
{

    let id = req.params.id;
   let genres = SanitizeArray((req.body.genres as string).split(","));
   let directors = SanitizeArray((req.body.directors as string).split(","));
   let writers = SanitizeArray((req.body.writers as string).split(","));
   let actors = SanitizeArray((req.body.actors as string).split(","));
   

   let moviesToUpdate = new Movies({
        _id: id,
        movieID: req.body.movieID,
        title: req.body.title,
        studio: req.body.studio,
        genres: genres,
        directors: directors,
        writers: writers,
        actors: actors,
        length: req.body.length,
        year: req.body.year,
        shortDescription: req.body.shortDescription,
        mpaRating: req.body.mpaRating,
        criticsRating: req.body.criticsRating

   });
   Movies.updateOne({_id: id}, moviesToUpdate)
   .then(function()
   {
    res.json(moviesToUpdate);
   })
   .catch(function(err)
   {
    console.error(err);
   });
}

export function DeleteMovies(req: Request, res: Response, next: NextFunction): void
{

    let id = req.params.id;
   
   Movies.deleteOne({_id: id})
   .then(function()
   {
    res.json(id);
   })
   .catch(function(err)
   {
    console.error(err);
   });
}