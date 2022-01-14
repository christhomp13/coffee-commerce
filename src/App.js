import React from 'react';
import './App.css';
import Banner from './components/Banner';
import CoffeeProduct from './components/CoffeeProduct';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasketView from './components/BasketView';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Header/>
        <Switch>
        
          <Route exact path="/"> 
            <Banner/>
            <div className='flex justify-center mt-3'>
              <h1 className='p-3 flex justify-center text-white bg-gray-600 hover:bg-gray-800 cursor-pointer max-w-sm'>BEST SELLERS</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <CoffeeProduct id='1' title="Costa Rican Blend" price={25}/>
            <CoffeeProduct id='2' title="Guatamalan Blend" price={22}/>
            <CoffeeProduct id='3' title="Columbian Blend" price={20}/>
            <CoffeeProduct id='4' title='Peru Blend' price={23}/>
            </div>
            
          </Route>
          
          <Route path="/checkout">
            <BasketView />
          </Route>

         </Switch>
        
      </Router>
  
      
    </div>
  );
}

export default App;
