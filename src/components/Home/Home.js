import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
	//const [ saveResults, setSaveResults ] = useState(false)
	const movieText = "Harry"
	const showText = "Friends"

	const dispatch = useDispatch()

	// useEffect(() => {
	// 	const data = window.localStorage.getItem("REDUX_MOVIE_APP")
	// 	if(data !== null) setSaveResults(JSON.parse(data))
	// }, [])

	// useEffect(() => {
	// 	window.localStorage.setItem("REDUX_MOVIE_APP", JSON.stringify(setSaveResults))
	// },[saveResults])

	useEffect( () => {
		dispatch(fetchAsyncMovies(movieText))
		dispatch(fetchAsyncShows(showText))
	}, [dispatch])

	return (
	// 	<div>
	// { setSaveResults && (
	// 	<div className="banner-img" onClick={() => setSaveResults(true)}>
	// 	<MovieListing />
	// </div>
	// ) }
	// 	</div>
	// );

		<div>
		<div className="banner-img">
		<MovieListing />
	</div>
	) 
		</div>
	);
};

export default Home;