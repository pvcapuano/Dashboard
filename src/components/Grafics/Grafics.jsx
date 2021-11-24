import React from "react";
import Chart from 'react-google-charts'
import { useState, useEffect } from 'react'
import './styles.css'


export const Grafics = () => {

    const TITULO = "Quantidade de acesso por dispositivo"

    const [ dados, setDados ] = useState([
      ['Dispositivo', 'Quantidade'],
      ['Mobile', 20],
      ['Tablet', 30],
      ['Desktop', 40],
      ['Outros', 50],
    ])
  
    useEffect(() => {
      function alterarDados() {
        const dadosGraficos = dados.map(linha => {
          if(Number.isInteger(linha[1])){
            linha[1] = Math.floor(Math.random() * 101)
          }
          return linha
        })
        setDados(dadosGraficos)
      }
  
      const intervalId = setInterval(() => alterarDados(), 5000)
  
      return () => {
        clearInterval(intervalId)
      }
  
    }, [dados])
  

    return(

        <div className="grafics">
       

<Chart className="card"
    width={'300px'}
    height={'200px'}
    chartType={'PieChart'}
    data={dados}
    options={{
      title: TITULO,
      is3D: true
    }}
    />

    <Chart className="card"
    width={'300px'}
    height={'200px'}
    chartType={'BarChart'}
    data={dados}
    options={{
      title: TITULO,
      chartArea: { width: '50%'},
      hAxis: { title: 'Quantidade'},
      vAxis: { title: 'Mês' },
      animation: { duration: 1000, easing: 'out', startup: true }
    }}
    />

    <Chart
    width={'300px'}
    height={'200px'}
    chartType={'AreaChart'}
    data={dados}
    options={{
      title: TITULO,
      hAxis: { title: 'Mês'},
      vAxis: { title: 'Quantidade'},
      animation: { duration: 1000, easing: 'out', startup: true }
    }}
    />

    </div>
    )
}