"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const movies_1 = require("../Controllers/movies");
router.get('/api', function (req, res, next) {
    console.log(__dirname);
    res.render('index', { title: 'Express' });
});
router.get('/list', function (req, res, next) {
    (0, movies_1.DisplayMoviesList)(req, res, next);
});
router.get('/find/:id', function (req, res, next) {
    (0, movies_1.DisplayMoviesByID)(req, res, next);
});
router.post('/add', function (req, res, next) {
    (0, movies_1.AddMovies)(req, res, next);
});
router.post('/update/:id', function (req, res, next) {
    (0, movies_1.UpdateMovies)(req, res, next);
});
router.delete('/delete/:id', function (req, res, next) {
    (0, movies_1.DeleteMovies)(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.js.map