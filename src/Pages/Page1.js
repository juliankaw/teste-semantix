import React from 'react';
import './pages.css'
import Graph2 from '../Components/Graph2';
import Graph1 from '../Components/Graph1';


const Page1 = () => {
  return (
    <div>
      <div className="flex">
        <div className="container-2">
          <div className="graph">
            <Graph1/>
          </div>
        </div>
        <div className="container-2">
          <div className="graph">
            <Graph2/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1;


