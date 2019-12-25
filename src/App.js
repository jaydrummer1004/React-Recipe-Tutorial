import React, { useEffect, useState } from 'react';
import "./App.css";

const App = () => {

  const APP_ID = '173c5943';
  const APP_KEY = '16d9859d3b42de1030a96f831cc3bb37';

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(url)
    const data = response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">search</button>
      </form>
    </div>
  );
}

export default App;