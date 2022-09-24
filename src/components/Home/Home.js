import React from 'react';
import { useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import MovieListing from '../MovieListing/MovieListing'

import { fetchAsyncMovies, fetchAsyncShows,} from '../../features/movies/movieSlice';

const Home = () => {
	let navigate = useNavigate()
	const movieText = "Harry"
	const showText = "Friends"
	
	const handleChange = () => {
		navigate("/")
	}

	const dispatch = useDispatch()

	useEffect( () => {
		dispatch(fetchAsyncMovies(movieText))
		dispatch(fetchAsyncShows(showText))
	}, [dispatch])

	return (

		<div>
			<div className="banner-img" onChange={handleChange}>
			<MovieListing />
			</div>
		</div>
	);

};

export default Home;