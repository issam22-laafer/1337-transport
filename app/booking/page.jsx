"use client";

// import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React, { useEffect } from "react";
export default function Page() {
  useEffect(() => {
    const summaries = document.querySelectorAll("details summary");

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

    return () => {
      summaries.forEach((summary) => {
        summary.removeEventListener("click", handleSummaryClick);
      });
    };
  }, []);
  return (
    <div className="h-screen  w-screen  ">
      <div className="text-main-orange fixed top-0 backdrop-blur-md flex justify-between px-7 items-center text-center h-16  w-full text-4xl pt-3 font-bold">
        1337 BEE
        <img src="/assets/logout_logo.svg" alt="logout_logo" className="w-22" />
      </div>
      <div className="booking_container h-screen  pt-16 flex justify-between items-start">
        <div className="updates booking m-auto h-full flex justify-start items-start w-update_w p-5  flex-col">
          {" "}
          <h1 className="text-3xl mb-5 font-extrabold  w-full text-start p-2  ">
            <span className="border-b-black border-b-2 border-b-solid w-fit">
              Updates :
            </span>
          </h1>
          <div className="  my-5 overflow-y-scroll messages_container w-full m-auto">
            <div className="message flex  justify-start border-t-solid border-t-2 w-full p-3 border-t-gray-500 items-start">
              <img src="/assets/mystic.svg" className="w-20" alt="" />
              <div>
                <details className="ml-5 ">
                  <summary className="cursor-pointer font-extrabold text-main-orange">
                    Mystic
                  </summary>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, recusandae, aliquam facere quod nesciunt, similique
                    maxime voluptatem facilis modi quaerat eaque tenetur. Nobis
                    natus porro praesentium dolor recusandae quas similique!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores exercitationem, sapiente voluptates expedita
                    possimus ipsa mollitia tenetur eum eligendi? Architecto
                    animi magni asperiores! Nisi eos repellat mollitia veniam
                    quaerat vitae. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsa, recusandae, aliquam facere quod
                    nesciunt, similique maxime voluptatem facilis modi quaerat
                    eaque tenetur. Nobis natus
                  </p>
                </details>
                <div className="ml-5 text-ellipsis overflow-hidden whitespace-nowrap w-96">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  recusandae, aliquam facere quod nesciunt, similique maxime
                  voluptatem facilis modi quaerat eaque tenetur. Nobis natus
                  porro praesentium dolor recusandae quas similique! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Maiores
                  exercitationem, sapiente voluptates expedita possimus ipsa
                  mollitia tenetur eum
                </div>
              </div>
            </div>
            <div className="message flex  justify-start border-t-solid border-t-2 w-full p-3 border-t-gray-500 items-start">
              <img src="/assets/mystic.svg" className="w-20" alt="" />
              <div>
                <details className="ml-5 ">
                  <summary className="cursor-pointer font-extrabold text-main-orange">
                    Mystic
                  </summary>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, recusandae, aliquam facere quod nesciunt, similique
                    maxime voluptatem facilis modi quaerat eaque tenetur. Nobis
                    natus porro praesentium dolor recusandae quas similique!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores exercitationem, sapiente voluptates expedita
                    possimus ipsa mollitia tenetur eum eligendi? Architecto
                    animi magni asperiores! Nisi eos repellat mollitia veniam
                    quaerat vitae. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsa, recusandae, aliquam facere quod
                    nesciunt, similique maxime voluptatem facilis modi quaerat
                    eaque tenetur. Nobis natus
                  </p>
                </details>
                <div className="ml-5 text-ellipsis overflow-hidden whitespace-nowrap w-96">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  recusandae, aliquam facere quod nesciunt, similique maxime
                  voluptatem facilis modi quaerat eaque tenetur. Nobis natus
                  porro praesentium dolor recusandae quas similique! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Maiores
                  exercitationem, sapiente voluptates expedita possimus ipsa
                  mollitia tenetur eum
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="booking h-full flex justify-start items-center w-96 p-5 border-l-black border-l-2 border-l-solid flex-col">
          <h1 className="text-3xl font-extrabold w-full text-start p-2">
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
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
            </div>
            <div className="blured_booking_card bg-main-brown blur-xs h-14 rounded-full flex justify-center items-center my-3 w-80 text-2xl font-extrabold">
              <img src="/assets/clock.svg" className="w-5 mr-3" alt="" />
              {" 01:00"}
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
