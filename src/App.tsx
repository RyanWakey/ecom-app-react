import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import ProductDetails from './components/ProductDetails'; // You will need to create this component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/product/:id" component={ProductDetails} />
        {}
      </Switch>
    </Router>
  );
}

export default App;