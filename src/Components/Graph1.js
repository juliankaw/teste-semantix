import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import '../Pages/pages.css'

  
  const Graph1 = () => {
    const [chartData, setChartData] = useState({})
   
    const chart = () => {
      let empLabel = [];
      let empValue = [];
  
  
      fetch("https://private-afe609-testefront.apiary-mock.com/anual-result")
        .then(response => response.json())
        .then(json => {
          for(const item of json){
            empLabel.push(item.label.slice(0,3))
            empValue.push(item.value);
            
          }
          setChartData({
            type: 'bars',
            labels: empLabel,
            
            datasets: [
              {
                
                data: empValue,
                backgroundColor: '#03A9F4',
                borderWidth: 0,
                type: 'bar',
                
              }
            ],
           
          })
        } )
        .catch(err => {
          console.log(err)
        })
        
      
      
    }
  
  
    
  
    useEffect(()=> {
      chart()
    }, [])
  
    return (
        < >
            <h2>Bars Chart</h2>
            <Line data={chartData} options={{
                responsive: true,
                maintainAspectRatio: false,
                title: {display: false},
                legend: {display: false},
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      },
                      gridLines: {
                        display: false
                      }
                  }],
                  xAxes: [{
                    gridLines: {
                      display: false
                    },
                    
                  }]
                },
                
            }}/>
          </>
  
             
        
    )
    
  }

export default Graph1
