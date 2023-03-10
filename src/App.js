import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import "./App.css"
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Profile from './Components/Profile';
import Home from './Components/Home';
import TvShows from './Components/TvShows';
import MovieDetails from './Components/MovieDetails';
import BackOffice from './Components/BackOffice';

function App(){
    return ( 
 <BrowserRouter>
 
  <Routes>

     <Route element={<Home />} path="/"/>
     <Route element={<TvShows/>} path="/tv-shows"/>
     <Route element={<Profile />} path="/Profile"/>
     <Route element={<BackOffice/>} path="/Add" />
      <Route element={<MovieDetails />} path="/movie-details/:movieId">
       
      </Route>
  </Routes>
 </BrowserRouter>
     );
}
 
export default App;