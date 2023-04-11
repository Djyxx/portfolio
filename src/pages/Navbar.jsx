import { useState } from "react";
import { scrollTo } from "../utils/scrollTo";

const Navbar = () => {
  let Links = [
    { name: "À propos de moi", link: "about-me" },
    { name: "Compétences", link: "skills" },
    { name: "Expériences", link: "experiences" },
    { name: "Projets", link: "projects" },
    { name: "Contact", link: "contact" },
    { name: "", link: "" },
  ];
  let [open, setOpen] = useState(false);
  const handleItemClick = (id) => () => {
    scrollTo({ id, duration: 3000 });
    setOpen(false);
  };
  return (
    <div className="shadow-md shadow-[#F6FFF8] w-full sticky top-0 text-[#F6FFF8] bg-[#9ad6a8]">
      <div className="md:flex items-center justify-between py-4 sticky top-0">
        <div className="font-bold text 2xl cursor-pointer flex items-center">
          <span className="text-5xl px-2 font-black">
            <button
              onClick={() => {
                scrollTo({ id: "hero" });
              }}
            >
              <p className="italic"> D.</p>
            </button>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`mr-4 md:flex md:items-center md:pb-0 pb:12  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  
          ${
            open ? "top-20 visible bg-[#9ad6a8] pb-4" : " hidden top-20[-490px]"
          } `}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
              <span
                onClick={handleItemClick(link.link)}
                className="hover:text-gray-400 duration-500 cursor-pointer"
              >
                {link.name}
              </span>
            </li>
          ))}

          <button className="md:flex md:items-center space-x-5 text-3xl ">
            <a
              href="https://github.com/Djyxx"
              target="_blank"
              className="hover:text-gray-400 duration-500"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/djarlane-egblomasse/"
              target="_blank"
              className="hover:text-gray-400 duration-500"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
