import React from 'react';
import './App.css';
import Banner from './components/Banner';
import CoffeeProduct from './components/CoffeeProduct';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasketView from './components/BasketView';
import ShopNow from './components/ShopNow';
import About from './components/About';




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

            <div className=''>
              <About/>
              </div>
            
            
          </Route>
          
          <Route path="/checkout">
            <BasketView />
          </Route>

          <Route path="/shopnow">
            <ShopNow/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <CoffeeProduct id='1' title="Costa Rican Blend" price={25}/>
            <CoffeeProduct id='2' title="Guatamalan Blend" price={22}/>
            <CoffeeProduct id='3' title="Columbian Blend" price={20}/>
            <CoffeeProduct id='4' title='Peru Blend' price={23}/>
            <CoffeeProduct id='5' title='Kenya Blend' price={24}/>
            <CoffeeProduct id='6' title='Ethiopian Blend' price={26}/>
            <CoffeeProduct id='6' title='D.R. Congo Blend' price={30}/>
            <CoffeeProduct id='6' title='Tanzanian Blend' price={50}/>
            </div>
          </Route>

          <Route path="/about">
            <About />
          </Route>

         </Switch>
        
      </Router>
  
      
    </div>
  );
}

export default App;
