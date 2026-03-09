import express from 'express'
import { searchMovies, getMovieDetails } from '../controllers/movieController.js';
//creating express router
const router = express.Router();

//routes for searching a movie based on title and getting a movie based on its id
router.get('/search', searchMovies);
router.get('/movies/:id', getMovieDetails);

export default router;