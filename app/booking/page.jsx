"use client";

// import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
export default function Page() {
  useEffect(() => {
    const summaries = document.querySelectorAll("details summary");
    let button_book = document.getElementById("button_book");
    let button_update = document.getElementById("button_update");

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.querySelector(".booking").style.display = "flex";
        document.querySelector(".updates").style.display = "flex";
      } else {
        if (document.querySelector(".booking").style.display == "flex") {
          document.querySelector(".booking").style.display = "flex";
          document.querySelector(".updates").style.display = "none";
        } else if (document.querySelector(".updates").style.display == "flex") {
          document.querySelector(".booking").style.display = "none";
          document.querySelector(".updates").style.display = "flex";
        }
      }
    };

    handleResize(); // Initial check

    button_book.onclick = () => {
      if (window.innerWidth < 1024) {
        document.querySelector(".updates").style.display = "none";
        document.querySelector(".booking").style.display = "flex";
      }
    };

    button_update.onclick = () => {
      if (window.innerWidth < 1024) {
        document.querySelector(".updates").style.display = "flex";
        document.querySelector(".booking").style.display = "none";
      }
    };

    const handleSummaryClick = (event) => {
      const details = event.target.closest("details");
      const ellipsisDiv = details.nextElementSibling;

      if (ellipsisDiv && ellipsisDiv.classList.contains("text-ellipsis")) {
        ellipsisDiv.classList.toggle("hidden");
      }
    };

    summaries.forEach((summary) => {
      summary.addEventListener("click", handleSummaryClick);
    });

    window.addEventListener("resize", handleResize);

    return () => {
      summaries.forEach((summary) => {
        summary.removeEventListener("click", handleSummaryClick);
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="h-screen   w-screen  ">
      {/* ----------------------------------------------- */}
      <div
        className="confirmation-popup  hidden	 z-50 w-screen  justify-center items-center h-screen  fixed top-0 left-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          className="md:w-96  flex 	 bg-main-brown rounded-xl  p-3 flex-col   justify-center items-center  w-full m-2 "
          style={{
            boxShadow: "0px 0px 5px #FFFFFF",
          }}
        >
          <h1 className="text-black text-2xl my-2 font-bold ">
            Choose Your Destination
          </h1>
          {/* <p className="md:w-80 w-full text-center text-sm font-extralight my-3">
            clicking yes will terminate your booking you won’t be able to rebook
            if places are full
          </p> */}
          <select
            name=""
            id=""
            className="outline-none md:w-80 p-2 rounded-lg border-main-brown border-2 border-solid w-full "
          >
            <option value="">msklil</option>
            <option value="">msklil</option>
            <option value="">msklil</option>
            <option value="">msklil</option>
          </select>

          <button className=" p-2 bg-main-orange rounded-lg w-44 my-3 text-2xl font-extrabold text-white">
            Book
          </button>
        </div>
      </div>
      {/* ----------------------------------------------- */}

      <div
        className="cancel-popup 	 z-50 w-screen flex justify-center items-center h-screen  fixed top-0 left-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          className="md:w-96  flex 	 bg-main-brown rounded-xl  p-3 flex-col   justify-center items-center  w-full m-2 "
          style={{
            boxShadow: "0px 0px 5px #FFFFFF",
          }}
        >
          <h1 className="text-black text-2xl my-2 font-bold ">
            Choose Your Destination
          </h1>
          <p className="md:w-80 w-full text-center text-sm font-extralight my-3">
            clicking yes will terminate your booking you won’t be able to rebook
            if places are full
          </p>

          <div>
            <button className=" p-2 bg-main-yellow rounded-lg w-36 mx-2 my-3 text-2xl font-extrabold text-white">
              Yes
            </button>
            <button className=" p-2 bg-red-500 rounded-lg w-36 mx-2 my-3 text-2xl font-extrabold text-white">
              No
            </button>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------- */}

      <div className="text-main-orange fixed top-0 backdrop-blur-md flex justify-between px-7 items-center text-center h-16  w-full text-4xl pt-3 font-bold">
        1337 BEE
        <img src="/assets/logout_logo.svg" alt="logout_logo" className="w-22" />
      </div>
      <div className="lg:hidden flex justify-center items-center pt-16 ">
        <button
          id="button_update"
          className="  bg-main-yellow w-36 text-2xl font-bold h-14 m-2 text-white rounded-full "
        >
          Updates
        </button>
        <button
          id="button_book"
          className="  bg-main-yellow w-36 text-2xl font-bold h-14 m-2 text-white rounded-full "
        >
          Book
        </button>
      </div>
      <div className="booking_container h-screen  lg:pt-16 pt-0 flex  justify-between items-start">
        {/* ---------------------------------------- */}
        <div className="updates  m-auto h-full  lg:flex hidden  justify-start items-start lg:w-update_w w-full p-5  flex-col">
          {" "}
          <h1 className="text-3xl lg:block hidden mb-5 font-extrabold  w-full text-start p-2  ">
            <span className="border-b-black border-b-2 border-b-solid w-fit">
              Updates :
            </span>
          </h1>
          <div className="  my-5 overflow-y-scroll messages_container w-full m-auto">
            <div className="message flex w-full justify-start border-t-solid border-t-2  p-3 border-t-gray-500 items-start">
              <img src="/assets/mystic.svg" className="lg:w-20 w-16" alt="" />
              <div className="w-full">
                <details className="ml-5 ">
                  <summary className="cursor-pointer font-extrabold text-main-orange">
                    Mystic
                  </summary>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, recusandae, aliquam facere quod nesciunt, similique
                    maxime voluptatem facilis modi quaerat eaque tenetur. Nobis
                  </p>
                </details>
                <div className="ml-5 text-ellipsis overflow-hidden whitespace-nowrap lg:w-96 w-paragraph_w">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  recusandae, aliquam facere quod nesciunt, similique maxime
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------------------- */}
        <div className="booking  h-full flex lg:justify-start lg:items-center justify-center items-center lg:w-96 w-full p-5 lg:border-l-black lg:border-l-2 lg:border-l-solid flex-col">
          <h1 className="text-3xl lg:block hidden font-extrabold w-full text-start p-2">
            <span className="border-b-black border-b-2 border-b-solid w-fit">
              Next Booking :
            </span>
          </h1>
          <div className="booking_container_time overflow-y-scroll h-full  ">
            <div className="booking_card flex overflow-hidden justify-between items-center rounded-3xl h-16 w-80 bg-main-brown my-3">
              <div className="w-2/3 flex justify-center items-center">
                <img src="/assets/clock.svg" className="w-4 mr-3" alt="" />
                <div className="flex flex-col justify-center items-start">
                  <h1 className="font-bold text-2xl">21:00</h1>
                  <span className="text-sm">12 places left</span>
                </div>
              </div>
              <div className="book_div_rotate relative text-2xl font-extrabold text-white w-1/3 flex justify-center items-center h-full">
                <span className="z-10">Book</span>
              </div>
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
