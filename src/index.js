import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import Movie from './Components/Movie';
import MyFooter from './Components/Footer';
import "./App.css"

import Choices from "./Components/Choices"
import Profile from './Components/Profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyNav />
<Choices />

  <Movie name={"Harry Potter"} />
         
  <Movie name={"Lord Of The Rings"} />

  <Movie name={"Guardians Of The Galaxy"} />
     
<Profile />
  <MyFooter />
  </React.StrictMode>
);

