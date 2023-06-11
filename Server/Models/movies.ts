import {Schema, model} from 'mongoose';

interface IMovies
{
    movieID: string,
    title: string,
    studio: string[],
    genres: string[],
    directors: string[],
    writers: string[],
    actors: string[],
    year: number,
    length: number,
    shortDescription: string,
    mpaRating: string,
    criticsRating: number
}

let moviesSchema = new Schema<IMovies>({
    movieID: String,
    title: String,
    studio: String,
    genres: [String],
    directors: [String],
    writers: [String],
    actors: [String],
    year: Number,
    length: Number,
    shortDescription: String,
    mpaRating: String,
    criticsRating: Number

});

let Movies = model<IMovies>('Movies', moviesSchema);

export default Movies;