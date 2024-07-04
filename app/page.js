
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/back.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex justify-center items-center w-screen "
    >
      <div className="login_container w-full flex justify-center font-extrabold  items-start flex-col">
        <div className="box md:w-fit w-screen flex justify-center items-center flex-col md:ml-10">
          <h1 className="uppercase text-white sm:text-8xl md:text-8xl text-6xl">
            WELCOME
          </h1>
          {/* <Image src="/assets/logo.svg"></Image> */}
          <img
            src="/assets/logo.svg"
            alt="app-logo"
            className="sm:w-60 w-44 m-5 bus13 "
          />
          <button className="login-intra w-64 p-4 mt-5 bg-white rounded-full flex justify-center items-center text-4xl">
            <img
              src="/assets/42_Logo.png"
              alt="42 logo"
              className="mx-4 sm:w-16 w-12 "
            />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
