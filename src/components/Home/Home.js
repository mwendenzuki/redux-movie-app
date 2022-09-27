import React from 'react';
import { useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing'

import { fetchAsyncMovies, fetchAsyncShows,} from '../../features/movies/movieSlice';

const Home = (key, defaultValue) => {

	let key = "searchResults"
	let defaultValue = ""
	
	const [ saveResults, setSaveResults ] = useState( () => {
		const searchResults = window.localStorage.getItem(key)
		return searchResults !== null ? JSON.parse(searchResults) : defaultValue
	})

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(searchResults))
	}, [key, defaultValue])

	return [saveResults, setSaveResults]
	

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