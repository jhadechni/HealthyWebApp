import React, { Component } from 'react'
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: [''],
  datasets: [
    {
      
      label: 'Peso bajo',
      backgroundColor: 'rgba(251, 189, 55, 1)',
      borderColor: 'rgba(251, 189, 55, 1)',
      
      data: [{x:18.49 , y: 5}]
      
    },{
      
      label: 'Peso normal',
      backgroundColor: 'rgba(138,191,44,1)',
      borderColor: 'rgba(138,191,44,1)',
      
      data: [{x:24.99 , y: 5}]
    },{
      label: 'Sobrepeso',
      backgroundColor: 'rgba(250, 124, 56, 1)',
      borderColor: 'rgba(250, 124, 56, 1)',
      
      data: [{x:29.99 , y: 5}]
    },{
      label: 'Obesidad',
      backgroundColor: 'rgba(250, 92, 56, 1)',
      borderColor: 'rgba(250, 92, 56, 1)',
      
      data: [{x:39.99 , y: 5}]
    },{
      label: 'Obesidad Mórbida',
      backgroundColor: 'rgba(255, 26, 26, 1)',
      borderColor: 'rgba(255, 26, 26, 1)',
      
      data: [{x:49.99 , y: 5}]
    }
  ]
};

export default class BarExample extends Component {
  render() {
    return (
      <div className="container p-5">
        <HorizontalBar
          data={data}
          width={60}
          height={60}
          options={{
            maintainAspectRatio: false,
            scales: {xAxes: [{stacked : true,ticks:{beginAtZero : false},display: false,ticks: {
              autoSkip: false
            }}],yAxes:[{stacked : true,ticks:{beginAtZero : false}},]},
            tooltips: { enabled: false },legend: {
              display: true,
              labels: {
                fontColor: 'rgb(0, 0, 0)'
              },
              position: 'bottom'
              }
            
          }}
        />
      </div>
    );
  }
};