"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let moviesSchema = new mongoose_1.Schema({
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
let Movies = (0, mongoose_1.model)('Movies', moviesSchema);
exports.default = Movies;
//# sourceMappingURL=movies.js.map