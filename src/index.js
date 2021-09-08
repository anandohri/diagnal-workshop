import React, {useState, useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './display';

function Diagnal(){
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  function handleSearch (e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const {movies, hasMore, error, loading} = Display(query, pageNumber)
  const observer = useRef()
  const lastMovieRef = useCallback(ele =>{
    if(loading)
      return

    if(observer.current)
      observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore)
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    })

    if(ele)
      observer.current.observe(ele)
    
  }, [loading, hasMore])

  return(
    <div className = 'Home'>
      <div className = 'NavBar'>
        <img className = 'Back' src = './images/Back.png' alt = 'back.png' />
        <text className = 'Filter'>ROMANTIC MOVIES</text>
        <img className = 'Search' src = './images/search.png' alt = 'search.png'/>
      </div>
      <div className = 'allMovies'>
        {movies.map((movie, ind) => {
          let pth = (movie['poster-image'] === 'posterthatismissing.jpg') ? './images/placeholder_for_missing_posters.png' : './images/' + movie['poster-image']
          if(ind + 4 === movies.length)
            return(
              <div className = 'Movie' ref = {lastMovieRef} key = {ind}>
                <img className = 'Poster' src = {pth} alt = {movie['name']} width = '100%' />
                <figcaption className = 'Caption'>{movie['name']}</figcaption>
              </div>
            )
          else
            return(
              <div className = 'Movie' key = {ind}>
                <img className = 'Poster' src = {pth} alt = {movie['name']} width = '100%' />
                <figcaption className = 'Caption'>{movie['name']}</figcaption>
              </div>
            )
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>  
    </div>
  )
}

ReactDOM.render(
  <Diagnal />,
  document.getElementById('root')
);