import { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "About me", link: "/" },
    { name: "Skills", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact", link: "/" },
    { name: "", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full ">
      <div className="md:flex items-center justify-between py-4 sticky top-0 text-[#1e1c21] bg-[#9ad6a8]  ">
        <div className="font-bold text 2xl cursor-pointer flex items-center">
          <span className="text-3xl mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb:12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  
          ${
            open ? "top-20 opacity-100" : "top-20[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <button className="md:flex md:items-center space-x-5 text-3xl">
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="at-circle"></ion-icon>
            <ion-icon name="call"></ion-icon>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
