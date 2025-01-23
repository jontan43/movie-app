import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{title:"Avengers", release_date:"23 Jan 2025", url:"https://m.media-amazon.com/images/I/719SFBdxRtL._AC_UF894,1000_QL80_.jpg"}}/>
      <MovieCard movie={{title:"Jack", release_date:"23 Jan 2025"}}/>
    </>
  )
}

export default App
