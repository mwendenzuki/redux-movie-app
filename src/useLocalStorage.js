import React, {useState, useEffect} from 'react'

const useLocalStorage = (key, initialValue) => {
	const getSearchResult = (key, initialValue) => {

	const searchResult = JSON.parse(localStorage.getItem(key))
	if (searchResult){
		return searchResult
	}else {
		return initialValue
	}
}

	const [ saveResults, setSaveResults ] = useState(() => {
		return getSearchResult(key, initialValue)
	})

		useEffect( () => {
			localStorage.setItem(key, JSON.stringify(saveResults))
		},[key, saveResults])

	return [saveResults, setSaveResults]
}

export default useLocalStorage
  