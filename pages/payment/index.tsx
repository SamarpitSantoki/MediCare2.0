import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [resfrompay, setresfrompay] = useState(null);

  useEffect(() => {
    console.log(resfrompay);
  }, [resfrompay]);

  function initializeRazorpay() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }

  async function makePayment() {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/payment/razorpay", { method: "POST" }).then(
      (t) => t.json()
    );
    console.log(data);
    let options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "MediCare",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "./images/logo.jpg",
      handler: function (response) {
        //call order saving from here and pass the extra data as well of items in the cart
        axios.post("api/payment/confirm", {
          ...response,
        });
        setresfrompay(response);
        console.log(response);
      },
      prefill: {
        name: "Samar Patel",
        email: "samarpit.santoki@gmail.com",
        contact: "9512084467",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  }
  return (
    <div>
      <h1>Payment</h1>
      <button onClick={makePayment}>Pay</button>
    </div>
  );
};

export default Index;
