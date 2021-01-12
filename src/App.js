import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home.jsx'
import  "./css/style.css";
import  "./css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} /> 
      </Switch>
    </BrowserRouter>
  );
}
export default App;
