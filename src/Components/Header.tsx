import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links = [
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

const navLinks = (col: Boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  };
  return links.map((link, index) => {
    return (
      <a
        key={index}
        onClick={handleClick}
        className={`${
          col ? "flex flex-col items-center" : ""
        } text-textColor text-lg font-mono hover:text-primaryColor`}
        href={`#${link}`}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${
        shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
      } transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20`}
    >
      <img
        src="hr.jpeg"
        alt="HR Logo"
        className="z-10 rounded-full w-15 h-15" // Adjusts the size of the logo
        style={{ width: isMobile ? '45px' : '60px', height: isMobile ? '45px' : '60px' }}
      />
      <div className="bs:flex gap-8 hidden">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };
