"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovies = exports.UpdateMovies = exports.AddMovies = exports.DisplayMoviesByID = exports.DisplayMoviesList = void 0;
const movies_1 = __importDefault(require("../Models/movies"));
function SanitizeArray(unsanitizedArray) {
    let sanitizedArray = Array();
    for (const unsanitizedString of unsanitizedArray) {
        sanitizedArray.push(unsanitizedString.trim());
    }
    return sanitizedArray;
}
function DisplayMoviesList(req, res, next) {
    movies_1.default.find({})
        .then(function (data) {
        res.status(200).json(data);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.DisplayMoviesList = DisplayMoviesList;
function DisplayMoviesByID(req, res, next) {
    let id = req.params.id;
    movies_1.default.findById({ _id: id })
        .then(function (data) {
        res.status(200).json(data);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.DisplayMoviesByID = DisplayMoviesByID;
function AddMovies(req, res, next) {
    let genres = SanitizeArray(req.body.genres.split(","));
    let directors = SanitizeArray(req.body.directors.split(","));
    let writers = SanitizeArray(req.body.writers.split(","));
    let actors = SanitizeArray(req.body.actors.split(","));
    let movies = new movies_1.default({
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
    movies_1.default.create(movies)
        .then(function () {
        res.json(movies);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.AddMovies = AddMovies;
function UpdateMovies(req, res, next) {
    let id = req.params.id;
    let genres = SanitizeArray(req.body.genres.split(","));
    let directors = SanitizeArray(req.body.directors.split(","));
    let writers = SanitizeArray(req.body.writers.split(","));
    let actors = SanitizeArray(req.body.actors.split(","));
    let moviesToUpdate = new movies_1.default({
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
    movies_1.default.updateOne({ _id: id }, moviesToUpdate)
        .then(function () {
        res.json(moviesToUpdate);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.UpdateMovies = UpdateMovies;
function DeleteMovies(req, res, next) {
    let id = req.params.id;
    movies_1.default.deleteOne({ _id: id })
        .then(function () {
        res.json(id);
    })
        .catch(function (err) {
        console.error(err);
    });
}
exports.DeleteMovies = DeleteMovies;
//# sourceMappingURL=movies.js.map