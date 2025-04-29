import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  buyNow,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (user) {
      document.getElementById("my_modal_3").close();
      buyNow();
    } else {
      navigate("/login");
    }
    console.log(user);
  };

  return (
    <>
      <button
        className="btn btn-primary text-white w-full my-2"
        onClick={() => {
          if (user) {
            document.getElementById("my_modal_3").showModal();
          } else {
            navigate("/login");
          }
        }}
      >
        Buy Now
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-2xl w-8/10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-8/10 m-auto tex-lg flex flex-col gap-0">
            <label className="text-lg" htmlFor="name">
              Enter Full Name
            </label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              className="input w-full"
            />
            <br />
            <label className="text-lg" htmlFor="address">
              Enter Full Address
            </label>
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              type="text"
              className="input w-full"
            />
            <br />
            <label className="text-lg" htmlFor="pincode">
              Enter Pincode
            </label>
            <input
              name="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              id="pincode"
              type="number"
              className="input w-full"
            />
            <br />
            <label className="text-lg" htmlFor="number">
              Enter Mobile Number
            </label>
            <input
              name="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="number"
              type="number"
              className="input w-full"
            />
            <br />
            <button
              onClick={handleBuyNow}
              className="btn btn-primary text-white"
            >
              Order Now
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            (For testing, use card number <strong>4111 1111 1111 1111</strong>,
            expiry <strong>12/34</strong>, CVV <strong>123</strong>)
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
