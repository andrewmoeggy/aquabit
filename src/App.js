import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home/homepage.component';
import Shop from './pages/shop/shop.component';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>

    </div>

  );
}

export default App;
