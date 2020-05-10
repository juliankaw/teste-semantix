import React, { useState, useEffect } from 'react';
import {Line as LineChart} from 'react-chartjs-2';
import '../Pages/pages.css'

  
  const Graph3 = () => {
    const [chartData, setChartData] = useState({})

    

    const chart = () => {
      let empLabel = [];
      let empValue = [];
      let empValue2 = [];
  
      
      fetch("https://private-afe609-testefront.apiary-mock.com/time-data")
        .then(response => response.json())
        .then(json => {
          for(const item of json.today){
            empValue.push(item.value)
            empLabel.push(item.label)

          }
          
          for(const item of json.yesterday){
            empValue2.push(item.value)
            
            
          }

          setChartData({
            type: 'line',
            labels: empLabel,
            
            datasets: [
              {
                label: 'Today',
                borderColor:'#2C82BE',
                data: empValue,
                backgroundColor: 'transparent',
                borderWidth: 0,
                type: 'line',
                pointBackgroundColor: '#2C82BE',
                lineTension: 0,
                fill: false
              },
              {
                label: 'Yesterday',
                borderColor:'#BF3FFF',
                data: empValue2,
                backgroundColor: 'transparent',
                borderWidth: 0,
                type: 'line',
                pointBackgroundColor: '#BF3FFF',
                lineTension: 0,
                fill: false
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
            <LineChart data={chartData} options={{
                responsive: true,
                maintainAspectRatio: false,
                   
                legend:{

                  display: true,
                  labels: {
                    usePointStyle: true,
                  },
                  
                } , 
                  

                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      },
                      gridLines: {
                        display: true
                      }
                  }],
                  xAxes: [{
                    gridLines: {
                      display: true
                    },
                    
                  }]
                },
                
            }}/>
          </>
  
             
        
    )
    
  }

export default Graph3