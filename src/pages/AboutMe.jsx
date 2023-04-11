const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-24 md:py-28 min-h-[92vh] px-12 text-[#F6FFF8] bg-[#9ad6a8]"
    >
      <div className="flex flex-row md:justify-end justify-center ">
        <img
          alt="app picture"
          className="w-full h-full max-w-[400px] md:px-6 pt-12"
          src="/assets/sssplatter.svg"
        />
      </div>
      <div className="text-xl md:text-2xl xl:pr-60 lg:pr-40 md:pr-30">
        <h3 className="text-3xl font-black">Djarlane Egblomasse</h3>
        <p className="mt-4">
          24 ans, rigoureux, autonome, doté d'un esprit agile et d'une capacité
          d'analyse aiguisé, souhaitant concrétiser son projet professionnel. En
          postulant à votre poste de développeur web. Afin de mettre à profit
          ses compétences et en acquérir de nouvelles.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
