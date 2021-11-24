import React  from 'react'
import './App.css';
import { Cards } from './components/Cards/Cards';
import { Grafics } from './components/Grafics/Grafics';
import { Header } from './components/Header/Header';
import { Tables } from './components/Tables/Tables';



function App() {


  return (

    <div className="App">
    <Header />
    <Cards />
    <Grafics />
    <Tables />
    </div>
  );
}

export default App;
