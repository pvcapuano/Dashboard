import React , { useState } from 'react'
import './App.css';
import Chart from 'react-google-charts'

function App() {

  const TITULO = "Quantidade de cadastros primeiro semestre"

  const [ dados, setDados ] = useState([
    ['Mes', 'Quantidade'],
    ['Janeiro', 20],
    ['Fevereiro', 30],
    ['Março', 40],
    ['Abril', 50],
    ['Maio', 60],
    ['Junho', 70]
  ])

  return (

    <div>
    <h1>Dashboard</h1>
    <Chart
    width={'400px'}
    height={'300px'}
    chartType={'PieChart'}
    data={dados}
    options={{
      title: TITULO
    }}
    />

<Chart
    width={'400px'}
    height={'300px'}
    chartType={'PieChart'}
    data={dados}
    options={{
      title: TITULO,
      is3D: true
    }}
    />

<Chart
    width={'400px'}
    height={'300px'}
    chartType={'PieChart'}
    data={dados}
    options={{
      title: TITULO,
      pieHole: 0.3
    }}
    />

    </div>
  );
}

export default App;
