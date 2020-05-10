import React, { useState, useEffect } from 'react';
import '../Pages/pages.css'
import {Pie} from 'react-chartjs-2';
import 'chart.piecelabel.js';
  
  const Graph2 = () => {
    const [chartData, setChartData] = useState({})
    
    
  
    const chart = () => {
      let empLabel = [];
      let empValue = [];
  
  
      fetch("https://private-afe609-testefront.apiary-mock.com/anual-percentage")
        .then(response => response.json())
        .then(json => {
          for(const item of json){
             empLabel.push(item.label)
             empValue.push(item.value);
            
          }
          setChartData({
          
            labels: empLabel,
            type: 'pie',
            datasets: [
              {
                
                data: empValue,
                backgroundColor: [
                  '#ABE1FA',
                  '#2C82BE',
                  '#32B88B'
                  ],
                  
               
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
            <h2>Pie Chart</h2>
            <Pie data={chartData} width="76" height="76" options={{
                responsive: true,
                maintainAspectRatio: false,  
                legend:{
                  display: true,
                  labels: {
                    usePointStyle: true,
                  },
                  
                }             
            }}/>
          </>

    )
    
  }

export default Graph2
