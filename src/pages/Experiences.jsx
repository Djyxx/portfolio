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
            <h3 className="text-2xl lg:text-3xl my-2">
              Janvier 2021 - Avril 2022 (1 an 4 mois), Coordinateur d'évènements
              festifs
            </h3>
            <p className="lg:text-xl pb-4">
              • Planification et coordination de tous les aspects de
              l'organisation d'événements festifs.
              <br /> • Gestion logistique, y compris la réservation de lieux.
              <br />• Supervision de la mise en place de l'événement, en
              veillant à ce que tout soit prêt et fonctionne correctement.
              <br />• Gestion des budgets et des ressources pour assurer le bon
              déroulement de l'événement.
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl my-2">
              2016 - 2021 (5 ans), Éducateur au CDEF de Villepinte
            </h3>
            <p className="lg:text-xl pb-4">
              • Travailler en étroite collaboration avec les enfants, les
              adolescents ou les adultes ayant des besoins spécifiques, tels que
              des troubles du comportement, des handicaps physiques ou mentaux,
              ou des difficultés d'adaptation sociale.
              <br />• Élaborer et mettre en œuvre des plans d'intervention
              individualisés.
              <br />• Maintenir une documentation précise et à jour, notamment
              des rapports d'évolution, des observations et des échanges avec
              les personnes concernées.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
