import {useState, useEffect} from 'react'
import axios from 'axios'

function Display(query, pageNumber){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {

    setLoading(true)
    setError(false)

    axios({
      method: 'GET',
      url: './API/CONTENTLISTINGPAGE-PAGE' + pageNumber + '.json'
    }).then(res => {
      
      setMovies(prevMovies => {
        return [...prevMovies, ...res.data.page['content-items'].content]
      })

      setHasMore(() => {
        if(res.data.page['page-size-requested'] !== res.data.page['page-size-returned'])
          return false
        return true
      })

      setLoading(false)

    }).catch(err => {

      setError(true)

    })

  }, [pageNumber])

  return {loading, error, hasMore, movies}
}

export default Display;