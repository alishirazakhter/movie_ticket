import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import JSON from './db.json';
import MovieList from './component/movieList';
import MovieDetailpageScreen from './component/screens/movie-detail-page'

function App() {
  const [movie, setMovie] = useState(JSON.movies);
  return (
    <>
      <Header list = {movie}/>
      {/* <MovieList list = {movie}/> */}
      <MovieDetailpageScreen list = {movie}/>
    </>
  )
}

export default App
