import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default/Default';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/cart' component={Cart} />
        <Route path='/details' component={Details} />
        <Route path='/' component={ProductList} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
