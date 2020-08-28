import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from "./contexts/CartContext"

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = newItem => {

      if( cart.length === 0){
         setCart([...cart, newItem]);
      }

      console.log( "NEW ITEM ", newItem)
     cart.map( currentItem => {
        console.log( "CURRENT ITEM ", currentItem)
        if( currentItem.id === newItem.id ){ 
            alert("ALREADY IN CART - NOT ENOUGH LOGIC WRITTEN YET TO ADD ANOTHER - APOLOGIES")
            setCart([...cart])
        }else if( currentItem !== newItem.id ){
            setCart([...cart, newItem]);
        }
     })
   };
   
   const removeItem = (idToRemove) => {

      setCart(cart.filter(item => idToRemove !== item.id));

    };

	return (
     
		<div className="App">
         <ProductContext.Provider value={{ products, addItem }}>
         <CartContext.Provider value={{ cart, removeItem }}>

            <Navigation cart={cart} />

            {/* Routes----------------- */}
            <Route exact path="/">
               <Products />
            </Route>

            <Route path="/cart">
               <ShoppingCart cart={cart} />
            </Route>

         </CartContext.Provider>
         </ProductContext.Provider>
		</div>
	);
}

export default App;

// WHY 2 CURLY BRACES IN VALUE ?
// WHY CART INSIDE OF PROVIDER ?
