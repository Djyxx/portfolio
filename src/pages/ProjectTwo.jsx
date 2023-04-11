import ButtonModal from "../components/OpenModal";

const ProjectTwo = () => {
  return (
    <div className="flex justify-evenly w-full h-[450px] mt-24 text-[#1e1c21] bg-[#9ad6a8]">
      <div className="w-1/4">
        <img
          alt="app picture"
          className="w-full h-96"
          src="https://cdn.discordapp.com/attachments/816873107464781877/1088106945887612958/23E09498-F414-459F-A76D-B3569A84CA1D.JPG"
        />
      </div>
      <div className=" w-1/4 self-center">
        <h2 className="text-5xl my-2">Project</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ButtonModal> My Projects</ButtonModal>
      </div>
    </div>
  );
};

export default ProjectTwo;
