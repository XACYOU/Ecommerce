import React from "react";

const Testimonial = () => {
  return (
    <div className=" flex flex-col gap-10 py-10 w-[80%] m-auto align-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold"> Testimonial </h1>
        <h2 className="text-xl">
          What Our <span className="text-pink-500">customers</span> are saying
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 justify-between">
        <div className="card bg-base-100 shadow-sm">
          <figure className="avatar p-5">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <p className="lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              ullam saepe voluptatum dolore laboriosam, quis quaerat recusandae
              harum dicta possimus architecto non nesciunt aspernatur a totam
              iure adipisci assumenda quas!
            </p>
            <span className="border-2 border-pink-500 w-10"></span>
            <div className="mt-5">
              <h2 className="card-title">SATYAM SINGH</h2>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure className="avatar p-5">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <p className="lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              ullam saepe voluptatum dolore laboriosam, quis quaerat recusandae
              harum dicta possimus architecto non nesciunt aspernatur a totam
              iure adipisci assumenda quas!
            </p>
            <span className="border-2 border-pink-500 w-10"></span>
            <div className="mt-5">
              <h2 className="card-title">SOHAIB AKHTAR</h2>
              <p>Senior Product Designer</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure className="avatar p-5">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <p className="lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              ullam saepe voluptatum dolore laboriosam, quis quaerat recusandae
              harum dicta possimus architecto non nesciunt aspernatur a totam
              iure adipisci assumenda quas!
            </p>
            <span className="border-2 border-pink-500 w-10"></span>
            <div className="mt-5">
              <h2 className="card-title">DHRUV SINGH</h2>
              <p> CTO </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
