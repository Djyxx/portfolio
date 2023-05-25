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
          Je suis un développeur Front-end passionné par la création
          d'expériences utilisateur innovantes et engageantes. Maîtrisant les
          langages HTML, CSS et JavaScript, je crée des interfaces interactives
          et esthétiques en utilisant des frameworks tels que React.js, Next.js
          et TailwindCSS.
          <br />
          <br />
          Je suis en mesure de développer des fonctionnalités et des éléments
          dynamiques sur l'interface, offrant ainsi une expérience utilisateur
          fluide et intuitive. Je suis créatif, rigoureux et j'aime résoudre les
          problèmes pour offrir des solutions convaincantes aux utilisateurs
          finaux.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
