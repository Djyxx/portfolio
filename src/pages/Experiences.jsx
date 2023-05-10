const Experiences = () => {
  return (
    <div
      id="experiences"
      className="bg-[#9ad6a8] py-20 text-[#F6FFF8] flex flex-row text-center items-center min-h-[92vh]"
    >
      <div className="container mx-auto px-4  lg:px-8">
        <h2 className="text-5xl  font-black mb-12 ">Expériences</h2>
        <div className="grid-cols-1 md:grid grid-cols-3 gap-8 ">
          <div>
            <h3 className="text-2xl lg:text-3xl my-2">
              2022 Otobre - Decembre, Stage chez Moked:
            </h3>
            <p className="lg:text-xl pb-4">
              Développement de composants pour une application web ERP
              (entreprise ressource planning)
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl my-2">
              2022 Janvier - Décembre, AFPA :
            </h3>
            <p className="lg:text-xl pb-4">
              Formation de Développement Web & Web Mobile : Réalisation d'une
              application mobile en groupe avec la méthode agile et
              l'utilisation de l'outil Notion
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl my-2">
              2017 - 2019, Samsung Campus, Epitech :
            </h3>
            <p className="lg:text-xl pb-4">
              Ecole de Développement Web & Apps Coding : Réalisation d'un site
              E-Commerce en Symfony plus collaboration avec l'ESSEC pour la
              partie "marketing" du projet - réalisé en groupe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
