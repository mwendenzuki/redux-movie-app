import React from 'react';
import { useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing'
import useLocalStorage from '../../useLocalStorage';

import { fetchAsyncMovies, fetchAsyncShows,} from '../../features/movies/movieSlice';

const Home = () => {
	const [ saveResults, setSaveResults ] = useLocalStorage("searchresults", "")
	const movieText = "Harry"
	const showText = "Friends"
	

	const dispatch = useDispatch()

	useEffect( () => {
		dispatch(fetchAsyncMovies(movieText))
		dispatch(fetchAsyncShows(showText))
	}, [dispatch])

	return (

		<div>
			<div className="banner-img" onChange={(e) => setSaveResults(e.target.value)} value={saveResults}>
			<MovieListing />
			</div>
		</div>
	);

};

export default Home;