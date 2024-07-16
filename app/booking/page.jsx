"use client";
import React from "react"; // Ensure React is imported

export default function Page() {
  return (
    <div className="min-h-screen  w-screen  ">
      <div className="text-main-orange backdrop-blur-md flex justify-between px-7 items-center text-center  top-0 w-full text-4xl pt-3 font-bold">
        1337 BEE
        <img src="/assets/logout_logo.svg" alt="logout_logo" className="w-22" />
      </div>
      <div className="booking_container">
        <div className="updates"></div>
        <div className="booking z-[-1] flex justify-center items-center w-96 p-5 border-r-black border-r-2 border-r-solid  flex-col">
          <h1 className="text-3xl font-extrabold w-full text-start p-2">
            Next Booking :
          </h1>
          <div className="booking_card flex overflow-hidden justify-between items-center  rounded-3xl h-16 w-80 bg-main-brown my-3 ">
            <div className="w-2/3 flex justify-center items-center">
              <img src="/assets/clock.svg" className="w-4 mr-3" alt="" />
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold text-2xl">21:00</h1>
                <span className="text-sm">12 places left</span>
              </div>
            </div>
            <div className="book_div_rotate relative  text-2xl font-extrabold  text-white w-1/3 flex justify-center items-center  h-full">
              <span className="z-10">Book</span>
            </div>
          </div>
          <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
            <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />

            {" 01:00"}
          </div>
          <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
            <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />

            {" 02:00"}
          </div>
          <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
            <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />

            {" 04:00"}
          </div>
          <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
            <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />

            {" 05:00"}
          </div>
          <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
            <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />

            {" 06:00"}
          </div>
        </div>
      </div>
    </div>
  );
}
