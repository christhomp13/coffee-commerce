import React from 'react'

function About() {
    return (
        <div className='flex p-5'>
            <img className='hidden md:block'src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2136&q=80" alt="coffee cup" objectFit='contain' layout='fill' height={300} width={400}/>
            <div className='flex flex-grow bg-white'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-5xl'>Our Story</h1>
                    <div className='w-7/12 mt-12 bg-gray-100'>
                        <p className='p-5 text-xl'>In 2022 we had a big idea: make people’s lives better through coffee. Thanks to our community of producers, roasters, baristas and supporters, that idea has become reality.</p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default About
