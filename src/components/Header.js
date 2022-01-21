import React, { useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { selectItemsCount } from '../features/basketSlice'
import { useHistory } from 'react-router-dom'
import { auth } from  '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const numberOfItemsInBasket = useSelector(selectItemsCount)
    const history= useHistory();

    
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        setIsLoggedIn(true)
    }

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
                    <h1 onClick={signInWithGoogle} className='hover:underline cursor-pointer'>{isLoggedIn ? 'Sign Out' : 'Login'}</h1>
                    <ShoppingCartIcon onClick={()=> history.push('/checkout')}className='h-14 p-4 cursor-pointer' />
                    <span className='absolute top-0 right-0  h-6 w-6 bg-red-600 text-center rounded-full text-white font-semibold'>{numberOfItemsInBasket}</span>
                </div>
            </div>
        </header>
    )
}

export default Header
