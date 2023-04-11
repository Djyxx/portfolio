import OpenModal from "../components/OpenModal";

const ProjectOne = () => {
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-2 items-center  py-24 md:py-28 min-h-[92vh] px-12 "
      id="projects"
    >
      <div className="flex flex-col items-center md:pl-32">
        <div className="md:text-end text-center">
          <h2 className="text-5xl my-2 font-black">Projet</h2>
          <h3 className="text-2xl lg:text-3xl my-2">SPOTIFY :</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <OpenModal>Mes projets</OpenModal>
        </div>
      </div>
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
        <img
          alt="app picture"
          className="h-[20rem] w-[20rem] rounded-full object-cover lg:h-[30rem] lg:w-[30rem]"
          src="/assets/spotify.png"
        />
      </div>
    </div>
  );
};

export default ProjectOne;
