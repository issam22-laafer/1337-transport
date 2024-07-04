import React from "react";

const nav = () => {
  return (
    <div className="nav w-full fixed top-0 flex md:justify-evenly justify-between items-center bg-transparent p-3">
      <img src="/assets/notif.svg" alt="notif" className="notif" />
      <img src="/assets/13-bus.svg" alt="logo" className="bus-13" />
      <img src="/assets/logout.svg" alt="logout" className="logout" />
    </div>
  );
};

export default nav;
