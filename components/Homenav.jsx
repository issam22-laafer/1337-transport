import Image from "next/image";
import React from "react";

export default function Homenav() {
  return (
    <div className="w-full bg-white h-20 z-20  top-0 flex bg-transparent	 justify-center items-center">
      <Image
        src={"/assets/logo1337.svg"}
        className="brightness-0"
        width={140}
        height={100}
      ></Image>
      {/* <img src="/assets/logo1337.png" alt="logo" className=""/> */}
    </div>
  );
}
