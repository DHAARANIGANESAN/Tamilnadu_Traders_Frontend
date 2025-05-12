import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import './PaymentPage.css';
import { useCreateOrderMutation } from '../slices/ordersApiSlice';
import { useDispatch } from 'react-redux';
import { clearCartItems } from '../slices/cartSlice';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [createOrder] = useCreateOrderMutation();

  const {
    customerDetails,
    cartItems,
    paymentMethod,
    shippingAddress,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = location.state || {};

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();

    if (!isLoaded) {
      alert('Failed to load Razorpay SDK. Please try again.');
      return;
    }

    const options = {
      key: 'rzp_test_xJn1KfhqB0jUwu',
      amount: customerDetails.total * 100,
      currency: 'INR',
      name: 'TAMILNADU TRADERS',
      description: 'Order Payment',
      handler: async function (response) {
        try {
          const res = await createOrder({
            orderItems: cartItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
          }).unwrap();

          dispatch(clearCartItems());
          alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
          navigate(`/order/${res._id}`);
        } catch (err) {
          alert('Error placing order. Please try again.');
        }
      },
      prefill: {
        name: customerDetails.name,
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      notes: {
        address: customerDetails.address,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (!customerDetails || !cartItems) {
    return <div className="payment-page-container">Missing customer or cart data.</div>;
  }

  return (
    <div className="payment-page-container">
      <div className="payment-box">
        <h2>Pay with Razorpay</h2>
        <p><strong>Name:</strong> {customerDetails.name}</p>
        <p><strong>Email:</strong> {customerDetails.email}</p>
        <p><strong>Phone:</strong> {customerDetails.phone}</p>
        <p><strong>Total Amount:</strong> ₹{customerDetails.total}</p>
        <button onClick={handlePayment}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default PaymentPage;
