// import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketTotalAmount, selectItems } from '../features/basketSlice'
import CheckoutCoffee from './CheckoutCoffee'
// import axios from 'axios'
// const stripePromise = loadStripe('pk_test_51KHxNvHNGOzHFQSPFuTNxQmhkutCEzRxHWMvn5djRrmWmTvcT3LVmKcavcg8AVCNk7yV5EbauZ9TeTeLOtlc3SiH00FLrajj7R')



function BasketView() {

const items = useSelector(selectItems)
const basketTotal = useSelector(selectBasketTotalAmount);
// const [session] = useSession();


// const createCheckoutSession = async () =>{
//     const stripe = await stripePromise;

//     const checkoutSession = await axios.post('/api/create-checkout-session',{
//         items: items,
//         // email: session.user.email
//     })

//     const result = await stripe.redirectToCheckout({
//         sessionId: checkoutSession.data.id,
//     });
//     if (result.error) alert(result.error.message);
// }

    return (
        <div className='bg-gray-100'>
            <main className='lg:flex m-w-screen-2xl mx-auto'>

                <div className='flex-grow m-5 shadow-sm'>

                    <img src="https://envato-shoebox-0.imgix.net/963e/0f60-b0d8-4bce-8eb2-76883c6e8b51/20190708-DSC_6785.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=4cbb60d5d8c50176e1894fb6b05c79a8" alt="coffee"
                    
                    width={1020}
                    height={250}
                    objectFit='contain'
                    />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h5 className='text-4xl text-semibold border-b pb-4'>
                            {items.length === 0 ? 'Your Shopping Cart is empty' : 'Shopping Cart'}
                        </h5>
                        <p>Total:${basketTotal}</p>
                        
                        {items.map((item, i) => (
                        <CheckoutCoffee key={i} id={item.id} title={item.title} price={item.price}/>
                        ))}
                    </div>
                </div>

                    <div className='flex flex-col bg-white p-10 shadow-md'>

                        {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>
                                Subtotal ({items.length} items):
                                <span className='font-bold'>
                                    ${basketTotal}
                                </span>
                            </h2>
                        </> 
                        )}

                        <button role='link' className='p-2 text-xs md:text-sm bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 active:from-gray-500 text-white'>
                            Proceed to Checkout
                        </button>
                        
                    </div>
                          
            </main>
        </div>
    )
}

export default BasketView