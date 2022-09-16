import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
	const movieText = "Harry"
	const showText = "Friends"

	const dispatch = useDispatch()

	useEffect( () => {
		dispatch(fetchAsyncMovies(movieText))
		dispatch(fetchAsyncShows(showText))
	}, [dispatch])

	return (
		<div>
			<div className="banner-img">
				<MovieListing />
			</div>
		</div>
	);
};

export default Home;