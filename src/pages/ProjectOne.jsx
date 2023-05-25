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
          <h3 className="text-2xl lg:text-3xl my-2">Clone Netflix :</h3>
          <p className="text-xl">
            Ce projet consiste à recréer l'interface utilisateur du site Netflix
            en utilisant HTML, CSS et JavaScript. Une API de films est intégrée
            pour afficher des données en temps réel. Les fonctionnalités
            incluent une page d'accueil avec des films populaires et differentes
            catgégories de films et série, ainsi que des trailers venant de
            Youtube quand il y'en a. Avec ce projet j'ai voulu mettre en avant
            mes compétences en développement front-end, en manipulation de
            données et en création d'interfaces conviviales.
          </p>
          <button
            className="text-[#F6FFF8] bg-[#9ad6a8] text-xl py-4 px-6 mt-4 rounded-full hover:bg-gray-400"
            onClick={() => {
              window.open("https://mynetflix-cf6b9.web.app/", "_blank");
            }}
          >
            Voir le projet
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
        <img
          alt="Logo Netflix"
          className="h-[15rem] w-[15rem] rounded-full object-cover lg:h-[20rem] lg:w-[20rem] md:ml-24 mt-4"
          src="/assets/Netflix_icon.svg"
        />
      </div>
    </div>
  );
};

export default ProjectOne;
