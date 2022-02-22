import React from 'react'

function Footer() {
  return (
      <div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-bold">ABOUT</h5>
                <p>Learn about our beans</p>
                <p>Countries we source From</p>
                <p>Subscription</p>
                <p>Meet our team</p>
                <p>Invest in our cause</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its coffee commerce</p>
                <p>Referrals Accepted</p>
                <p>Brand Ambassadors</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">NEWS</h5>
                <p>How Coffee Commerce works</p>
                <p>Newsroom</p>
                <p>The Why behind our mission</p>
                <p>Future Shops</p>
                <p>Main Locations</p>
            </div>

            

        </div>
            
            <div className='flex justify-center p-3'>
                <h1>Made by Chris Thompson</h1>
            </div>
            
    </div>
  )
}

export default Footer