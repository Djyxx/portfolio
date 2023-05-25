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
            <h3 className="text-2xl lg:text-3xl my-2"></h3>
            <p className="lg:text-xl pb-4"></p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl my-2">
              Octobre 2022 - Avril 2023 (7 mois), Développeur frontend React
              chez Moked
            </h3>
            <p className="lg:text-xl pb-4">
              - Entreprise de consulting web, qui offre des services de conseil
              et de développement spécialisés en utilisant React : <br />
              • Développement de composants pour une application web ERP
              (entreprise ressource planning) <br />• Développement de
              fonctionnalités et d'éléments dynamiques sur une interface
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl my-2"></h3>
            <p className="lg:text-xl pb-4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
