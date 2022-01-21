const stripe = require('stripe')('sk_test_51KHxNvHNGOzHFQSP2pCNZxBpOgQbMGqjHOX1GxLsCrXuyuEP9gtXry8ELxOGaRc08NOnvrHQlUzTe6W6GIwWtzC700sfCpssrR')

export default async (req, res) => {
    const { items } = req.body;

    const transformedItems = items.map( item => ({
        price_data: {
            currency: 'usd',
            quantity: 1,
            unit_amount: item.price *100,
            product_data: {
                name: item.title,
                // images: [item.image]
            }
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        //shipping_rates: [xxx]
        shipping_address_collection:{
            allowed_countries: ['US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        // success_url:`${http://localhost:3001/}/success`,
        // cancel_url: `${http://localhost:3001/}/checkout`,
        metadata: {
            // email,
            images: JSON.stringify(items.map(item => item.image))
        }
    });

    res.status(200).json({id: session.id})
}