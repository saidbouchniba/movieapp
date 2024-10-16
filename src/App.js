import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Movielist from './components/Movielist';
import Movies from './components/Data';
import Addmovie from './components/Addmovie';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Moviedetails from './components/Moviedetails';
function App() {
  const [movies, setmovies] = useState ([])
  useEffect(()=>setmovies(Movies),[movies])
  return (
    <div className="App">
      <Header />
      <Addmovie setmovies={setmovies} movies={movies} />
      <Routes>
        <Route path='/movieapp' element={<Movielist movies={movies} setmovies={setmovies} />} />
        <Route path='/details/:id' element={<Moviedetails />} />

      </Routes>


    </div>
  );
}

export default App;
