// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// import CardIcon from "../images/credit-card.svg";
// import ProductImage from "../images/product-image.jpg";

// import "../styles.css";

// let stripePromise;

// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
//   }

//   return stripePromise;
// };

// const CheckoutPage = () => {
//   const [stripeError, setStripeError] = useState(null);
//   const [isLoading, setLoading] = useState(false);
//   const item = {
//     price: "price_1K3TfMA4B8Maa00LFZ4EFwdX",
//     quantity: 1
//   };

//   const checkoutOptions = {
//     lineItems: [item],
//     mode: "payment",
//     successUrl: `${window.location.origin}/success`,
//     cancelUrl: `${window.location.origin}/cancel`
//   };

//   const redirectToCheckout = async () => {
//     setLoading(true);
//     console.log("redirectToCheckout");

//     const stripe = await getStripe();
//     const { error } = await stripe.redirectToCheckout(checkoutOptions);
//     console.log("Stripe checkout error", error);

//     if (error) setStripeError(error.message);
//     setLoading(false);
//   };

//   if (stripeError) alert(stripeError);

//   return (
//     <div className="checkout">
//       <h1>Stripe Checkout</h1>
//       <p className="checkout-title">Design+Code React Hooks Course</p>
//       <p className="checkout-description">
//         Learn how to build a website with React Hooks
//       </p>
//       <h1 className="checkout-price">$19</h1>
//       <img
//         className="checkout-product-image"
//         src={ProductImage}
//         alt="Product"
//       />
//       <button
//         className="checkout-button"
//         onClick={redirectToCheckout}
//         disabled={isLoading}
//       >
//         <div className="grey-circle">
//           <div className="purple-circle">
//             <img className="icon" src={CardIcon} alt="credit-card-icon" />
//           </div>
//         </div>
//         <div className="text-container">
//           <p className="text">{isLoading ? "Loading..." : "Purchase"}</p>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;
