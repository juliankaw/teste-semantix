import React from 'react';
import Header from './Components/Header/Header'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import './App.css'



function App() {
  return ( 
    <div className = "App" >
      <div className="container">
        <BrowserRouter>
          <div className="header" >
            <Header/>
          </div>
          <div className="class">
            <Switch>
              <Route path="/" exact component={Page1}/>
            </Switch>
            <Switch>
              <Route path="/page2"  component={Page2}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;