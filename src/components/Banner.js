import React from 'react'
import { useHistory } from 'react-router-dom'

function Banner() {

    const history= useHistory();

    return (
             <div className='relative'>

                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
                alt="coffee"
                layout="fill" objectFit='cover' 
                        />
                
                <div className='absolute top-1/4 w-full text-center text-white space-y-3'>
                    <h1 className='xs:text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-6xl text-bold'>Embrace the Grind.</h1>
                    <h2 className=' md:text-xl  xl:text-4xl'>Coffee is for lovers.</h2>
                </div>
                

                <div className='absolute top-1/2 w-full text-center'>
                    <button 
                    onClick={()=> history.push('/shopnow')}
                    className='px-10 py-4 border-2 border-white text-white text-xl text-semibold hover:bg-white hover:text-gray-800 hover:shadow-xl active:scale-90 transition duration-150 '>Shop Now</button>
                </div>
                    
            </div>
    )
}

export default Banner
