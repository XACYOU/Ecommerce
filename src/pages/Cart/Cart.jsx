import React, { useEffect, useState } from "react";
import { Layout, Modal } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    let temp = 0;
    cartItems.forEach((item) => {
      temp += parseInt(item.price);
    });
    setSubTotal(temp);
  }, [cartItems]);

  const shippingCharges = parseInt(120);

  const total = subTotal + shippingCharges;

  // Razorpay Integration

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      toast.error("All fields are mandatory");
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      key_secret: import.meta.env.VITE_RAZORPAY_SECRET_KEY,
      amount: total * 100,
      currency: "INR",
      name: "Apna Dukaan",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png", // optional
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userId: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          const orderRef = collection(fireDB, "orders");
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name: "Saurabh Negi",
        email: "saurabh@example.com",
        contact: "9000090000",
      },
      theme: {
        color: "#F37254",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleDeleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete Product from Cart");
  };
  return (
    <Layout>
      <div className="w-full my-10 min-h-screen ">
        <h2 className="text-center text-3xl font-bold"> Cart Items </h2>
        <div className=" mt-5 flex flex-col lg:flex-row lg:w-8/10 lg:mx-auto gap-3">
          <div className="grid grid-cols-1 xl:grid-cols-2 w-9/10 m-auto gap-10">
            {cartItems.map((item, i) => {
              const { title, price, imageUrl, description } = item;
              return (
                <div
                  key={i}
                  className="shadow rounded-xl p-4 flex gap-1 justify-between"
                >
                  <div className=" flex gap-4 w-full">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-30 h-30 rounded-lg"
                    />
                    <div className="w-full overflow-hidden break-words">
                      <h2 className="text-xl sm:text-2xl font-bold my-2">
                        {title.split(" ").slice(0, 4).join(" ")}...
                      </h2>
                      <p className="">
                        {description.split(" ").slice(0, 10).join(" ")}...
                      </p>
                      <p className="font-bold md:text-lg my-3"> ₹{price} </p>
                    </div>
                  </div>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      onClick={() => handleDeleteCart(item)}
                      className="w-8 h-8 hover:cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-9/10 xl:w-4/10 mx-auto p-2">
            <div className="flex text-lg justify-between w-9/10 m-auto">
              <p> Subtotal </p>
              <p> ₹{subTotal} </p>
            </div>
            <div className="flex text-lg justify-between w-9/10 m-auto">
              <p> Shipping </p>
              <p> ₹{shippingCharges} </p>
            </div>
            <span className="border border-gray-300 block w-8/10 m-auto mt-2 mb-3"></span>
            <div className="flex text-lg font-bold justify-between w-9/10 m-auto">
              <p> Total </p>
              <p> ₹{total}</p>
            </div>
            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
