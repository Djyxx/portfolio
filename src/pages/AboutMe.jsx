const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-24 md:py-28 min-h-[92vh] px-12 text-[#F6FFF8] bg-[#9ad6a8]"
    >
      <div className="flex flex-row md:justify-end justify-center ">
        <img
          alt="app picture"
          className="w-full h-full max-w-[600px] md:px-6 pt-12"
          src="/assets/sssplatter.svg"
        />
      </div>
      <div className="text-xl md:text-2xl xl:pr-60 lg:pr-40 md:pr-30">
        <h3 className="text-3xl font-black">Djarlane Egblomasse</h3>
        <p className="mt-4">
          Bienvenue sur mon portfolio en tant que développeur web. Passionné et
          rigoureux, j'ai décidé de concrétiser mon attrait pour la
          programmation en suivant une formation intensive au cours de laquelle
          j'ai acquis de solides compétence techniques en travaillant sur de
          nombreux projets seul et en groupe. La pluridisciplinarité de ma
          formation me pousse sans cesse à développer mes domaines de
          compétences et à apprendre au contact d'autrui. Ainsi, je souhaite
          mettre à profit mes compétence et en acquérir de nouvelles au sein
          d'expériences professionnels enrichissantes dans lesquelles je désire
          pleinement m'investir.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
