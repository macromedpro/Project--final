import React from "react";

import {BrowserRouter, Routes, Route   } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";


function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <div>
          
    <Header></Header>
      <div className="container">
      
      <Routes>
        <Route path="/" exact element= {<Home /> } />
          <Route path="/movies/:imdbID" element={<MovieDetail />}/> 
        <Route path='*' element={<PageNotFound />} />
      </Routes>
     
      </div>
      <Footer />
      </div>
      </div>
      </BrowserRouter>
  );
    
};


export default App;
