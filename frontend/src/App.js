import React from 'react';
import Header from './components/Header';
import InputWeather from './components/InputWeather';
import Cities from './components/Cities';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <Header/>
      <InputWeather/>
      <Cities/>
    </div>
  );


}

export default App;
