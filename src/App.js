import React from 'react';

import './App.css';

import Home from './Components/HomePage';
import HomeWorksPage from './Components/HomeWorksPage';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom'

function App() {
  return (
    
    
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/homeworks" component={HomeWorksPage}/>
      
      </Router>
    
  );
}

export default App;
