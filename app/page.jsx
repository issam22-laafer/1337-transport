import Image from "next/image";

export default function Home() {
  return (
    <div className="   min-h-screen w-screen  bg-main-bg">
      <div className="text-main-orange backdrop-blur-md text-center  top-0 w-full text-4xl pt-3 font-bold">
        1337 BEE
      </div>
      <div className="min-h-screen  flex justify-center items-center flex-col">
        <h1 className="sm:text-8xl text-6xl text-main-orange font-bold">
          Hello,
        </h1>
        <h1 className="sm:text-6xl text-5xl ml-20 text-main-yellow">Welcome</h1>
        <div className="p-5  flex justify-center items-center border-dashed border-main-orange border-4 border-r-transparent border-l-transparent border-t-transparent">
          <img src="/assets/bus-orange.svg" className="mt-7  " alt="" />
        </div>
        <button className="flex justify-evenly rounded-full items-center mt-10 p-2  bg-main-orange w-52">
          <img src="/assets/42.svg" className="w-22" alt="42 logo" />
          <h1 className="font-extrabold text-3xl    text-white ">Login</h1>
        </button>
      </div>
    </div>
  );
}
