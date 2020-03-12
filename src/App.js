import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/homepage.component';


const AboutTest = () => {
  return (
    <div className="">about</div>
  )
}

const ShopTest = () => {
  return (
    <div className="">Shop</div>
  )
}

const ThirdPage = () => {
  return (
    <div className="">ThirdPage</div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/about' component={AboutTest} />
        <Route path='/shop' component={ShopTest} />
        <Route path='/third' component={ThirdPage} />

        <Route path='/' component={Home} />
      </Switch>

    </div>

  );
}

export default App;
