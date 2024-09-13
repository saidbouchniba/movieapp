import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Movielist from './components/Movielist';
import Movies from './components/Data';
import Addmovie from './components/Addmovie';
import { useState } from 'react';
function App() {
  const [movies,setmovies]=useState(Movies)

  return (
    <div className="App">
<Header/>
<Addmovie setmovies={setmovies} movies={movies}/>
<Movielist movies={movies} setmovies={setmovies}/>
    </div>
  );
}

export default App;
