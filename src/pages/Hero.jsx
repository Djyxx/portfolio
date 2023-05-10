const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row justify-evenly items-center w-full min-h-screen px-12"
    >
      <div className="">
        <h1 className="text-5xl lg:text-7xl text-center md:text-left">
          Hello,
          <br /> I'm Djarlane
          <br />
          Egblomasse
        </h1>
        <h2 className="text-4xl lg:text-5xl text-center md:text-left mt-2">
          Fullstack developer
          <br /> Reactjs / Nodejs
        </h2>
      </div>

      <div className="mt-6 md:mt-0 ">
        <img
          alt="app picture"
          className="h-[20rem] w-[20rem] bg-[#9ad6a8] rounded-full object-cover lg:h-[26rem] lg:w-[26rem]"
          src="/assets/djyx.png"
        />
      </div>
    </div>
  );
};

export default Hero;
