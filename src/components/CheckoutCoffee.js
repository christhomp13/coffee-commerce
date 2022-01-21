import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import { addItemToBasket, removeItemFromBasket } from '../features/basketSlice'
import { useDispatch } from 'react-redux'

const MAX_RATING = 5;
const MIN_RATING = 3;

function CheckoutCoffee({id, title, price}) {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const dispatch = useDispatch();

    const addItem = () =>{
        const product={
            id, title, price, rating
        }
        dispatch(addItemToBasket(product));
    } 

    const removeItem = () => {
        dispatch(removeItemFromBasket({ id }))
    }

    return (
        <div className='grid grid-cols-5 p-2'>
                <img src='https://media.istockphoto.com/photos/bag-with-coffee-beans-isolated-on-white-picture-id166000454?b=1&k=20&m=166000454&s=170667a&w=0&h=0Id4xm6EVJwZm55Y4nba-qXUXWsfBae0q6i6A0Falhg=' alt='coffee' height={200} width={200} objectFit='contain'/>

                <div className='col-span-3 mx-5'>
                    <h4 className='my-3'>{title}</h4>

                    <div className='flex'>
                        {Array(rating).fill().map((_,i)=>(
                        <StarIcon className='h-5 text-gray-500'/>
                        ))}
                    </div>
                    <div className='mb-5'>
                        <p>${price}</p>
                    </div>
                
                    
                </div>
                
                    <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                        
                        <button onClick={addItem} className='mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 active:from-gray-500 text-white'>Add to Basket</button>

                        <button onClick={removeItem} className='mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 active:from-gray-500 text-white'>Remove from Basket</button>
                    </div>     
        </div>
    )
}

export default CheckoutCoffee
