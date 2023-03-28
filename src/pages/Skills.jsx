import ButtonModal from "../components/ButtonModal";

const Skills = () => {
  return (
    <div id="skills">
      <div className="flex justify-evenly bg-[#1D1D1D] w-full h-96 my-72 ">
        <div className="w-2/5">
          <h2 className="text-5xl my-2 text-center">Skills</h2>
          <div>
            <h3 className="text-3xl mt-2">Front-end</h3>
            <p className="mt-2 text-xl">
              NextJS, ReactJS, Formik, TailwindCSS, Axios
            </p>
          </div>
          <div>
            <h3 className="text-3xl mt-2">Back-end</h3>
            <p className="mt-2 text-xl">
              Express, Knex, Objection, API Rest, JWT
            </p>
          </div>
          <div>
            <h3 className="text-3xl mt-2">Database</h3>
            <p className="mt-2 text-xl">PostgreSQL, MySQL</p>
          </div>
          <div>
            <h3 className="text-3xl mt-2">Outils</h3>
            <p className="mt-2 text-xl">Github, Notion, Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
