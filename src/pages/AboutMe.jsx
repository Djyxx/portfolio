import Section from "../components/Section";

const AboutMe = () => {
  return (
    <Section id="about-me">
      <div className="flex justify-center w-full h-96 mb-72">
        <div className=" w-1/4">
          <img
            alt="app picture"
            className="w-full h-full"
            src="https://cdn.discordapp.com/attachments/816873107464781877/1088106945887612958/23E09498-F414-459F-A76D-B3569A84CA1D.JPG"
          />
        </div>
        <div className=" w-1/4 mx-14 my-14 text-2xl ">
          <h3 className="text-3xl">Djarlane Egblomasse</h3>
          <p>
            24 ans, rigoureux, autonome, doté d'un esprit agile et d'une
            capacité d'analyse aiguisé, souhaitant concrétiser son projet
            professionnel. En postulant a votre poste de développeur web. Afin
            de mettre à profit ses compétences et en acquérir de nouvelles.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
