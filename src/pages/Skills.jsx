const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col lg:flex-row justify-evenly w-full py-12 text-center min-h-[92vh] items-center"
    >
      <div className="w-full lg:w-2/5">
        <h2 className="text-5xl font-black">Compétences</h2>
        <div className="mt-12">
          <h3 className="text-3xl">Front-end</h3>
          <p className="mt-2 text-xl">
            NextJS, ReactJS, Formik, TailwindCSS, Axios
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl">Back-end</h3>
          <p className="mt-2 text-xl">
            Express, Knex, Objection, API Rest, JWT
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl">Base de données</h3>
          <p className="mt-2 text-xl">PostgreSQL, MySQL</p>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl">Outils</h3>
          <p className="mt-2 text-xl">Github, Notion, Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
