import ButtonModal from "../components/ButtonModal";

const Hero = () => {
  return (
    <div className="flex justify-evenly place-items-center  w-full h-screen">
      <div className=" w-1/4">
        <h1 className="text-7xl">
          Hello,
          <br /> I'm Djarlane Egblomasse
        </h1>
        <h2 className="text-5xl mt-2 ">Fullstack developer Reactjs / Nodejs</h2>
        <ButtonModal>My Projects</ButtonModal>
      </div>

      <div className="w-1/4">
        <img
          alt="app picture"
          className="w-full h-96"
          src="https://cdn.discordapp.com/attachments/816873107464781877/1088106945887612958/23E09498-F414-459F-A76D-B3569A84CA1D.JPG"
        />
      </div>
    </div>
  );
};

export default Hero;
