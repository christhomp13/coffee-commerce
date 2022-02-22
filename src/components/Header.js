import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { selectItemsCount } from '../features/basketSlice'
import { useHistory } from 'react-router-dom'
import { useUserAuth } from "../contexts/AuthContext";

function Header() {
    const { logOut, user } = useUserAuth();
    const history = useHistory();
    const handleLogout = async () => {
      try {
        await logOut();
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };



    const numberOfItemsInBasket = useSelector(selectItemsCount)
    


    return (
        <header className='sticky top-0 z-50'>
            <div className='flex items-center p-2 px-8 bg-gray-800 text-white'>
                <div className='hidden sm:flex items-center mt-2 space-x-10'>
                    <h1 onClick={()=> history.push('/shopnow')} className='hover:underline cursor-pointer'>Shop</h1>
                    <h1 onClick={()=> history.push('/about')}className='hover:underline cursor-pointer'>About</h1>
                </div>

                <div onClick={()=> history.push('/')} className='flex flex-grow justify-center items-center mx-auto'>
                    <h1 className='mx-auto text-3xl font-bold cursor-pointer hover:bg-white hover:text-gray-800 p-2 active:scale-90 transition duration-150'>Best Coffee Co.</h1>
                </div>

                <div className='relative flex items-center space-x-5'>
                        <h1 className='flex text-white'>{user && <button className='flex hover:underline' onClick={handleLogout}>
                             Log out</button>}</h1> 
                        
                    <h1 hidden={user} onClick={() => history.push('/login')} className='hover:underline cursor-pointer'>Login</h1>
                    <ShoppingCartIcon onClick={()=> history.push('/checkout')}className='h-14 p-4 cursor-pointer' />
                    <span className='absolute top-0 right-0  h-6 w-6 bg-red-600 text-center rounded-full text-white font-semibold'>{numberOfItemsInBasket}</span>
                </div>
            </div>
        </header>
    )
}

export default Header;
