"use client";
import React from "react"; // Ensure React is imported
import { useEffect } from "react";
export default function Page() {
  useEffect(() => {
    const anvbus = document.getElementsByClassName("unavailable-bus");
    for (let i = 0; i < anvbus.length; i++) {
      anvbus[i].style.pointerEvents = "none";
    }
  }, []);
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/home-bg.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        overflowX: "scroll",
      }}
      className="home-page "
    >
      <div className="container-booking mt-20 h-full w-full">
        <h1 className="login text-white md:pl-10 pl-0  mt-10 font-bold md:text-5xl text-4xl w-full md:text-start text-center">
          Welcome login!
        </h1>
        <div className="md:mt-72 mt-20">
          <h1 className=" text-white md:pl-10 pl-0  font-bold md:text-3xl text-2xl w-full md:text-start text-center">
            Available Bus :
          </h1>
          <div className="bus-container flex mt-10 xl:justify-start justify-center  flex-wrap flex-wrap items-center w-full">
            <div className="sm:w-72  w-72 m-10 h-32 rounded-3xl flex flex-col justify-evenly items-evenly  bg-dark-blue bg-black">
              <div className="container1 flex mt-2 justify-evenly items-center">
                <div className="bus-time w-32 text-center p-2 text-xl rounded-3xl font-bold bg-lightgreen">
                  9pm bus
                </div>
                <div className="time-remaining text-3xl text-white font-extrabold">
                  00:42
                </div>
              </div>
              <div className="conatiner2 flex  justify-evenly items-center">
                <div className="available-places text-center w-32 text-white font-bold">
                  12 places left
                </div>
                <button className="booking-button rounded-2xl bg-light-gray font-bold text-2xl w-24">
                  Book
                </button>
              </div>
            </div>
            {/* ---------------- */}
            <div className="unavailable-bus sm:w-72   w-72 m-10 h-32 rounded-3xl flex  flex-col justify-evenly items-evenly  bg-unavailable-gray bg-black">
              <div className="container1 flex mt-2 justify-evenly items-center">
                <div className="bus-time w-32 text-center p-2 text-xl rounded-3xl font-bold bg-lightgreen">
                  9pm bus
                </div>
                <div className="time-remaining text-3xl text-white font-extrabold">
                  00:42
                </div>
              </div>
              <div className="conatiner2 flex  justify-evenly items-center">
                <div className="available-places text-center w-32 text-white font-bold">
                  12 places left
                </div>
                <button className="booking-button rounded-2xl bg-unavailable-blue  font-bold text-2xl w-24">
                  Book
                </button>
              </div>
            </div>
            <div className="unavailable-bus sm:w-72   w-72 m-10 h-32 rounded-3xl flex  flex-col justify-evenly items-evenly  bg-unavailable-gray bg-black">
              <div className="container1 flex mt-2 justify-evenly items-center">
                <div className="bus-time w-32 text-center p-2 text-xl rounded-3xl font-bold bg-lightgreen">
                  9pm bus
                </div>
                <div className="time-remaining text-3xl text-white font-extrabold">
                  00:42
                </div>
              </div>
              <div className="conatiner2 flex  justify-evenly items-center">
                <div className="available-places text-center w-32 text-white font-bold">
                  12 places left
                </div>
                <button className="booking-button rounded-2xl bg-unavailable-blue  font-bold text-2xl w-24">
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
