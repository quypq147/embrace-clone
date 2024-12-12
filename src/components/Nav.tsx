import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const NavLinks = () => (
  <>
    <NavLink to="/Howitworks">How It Works</NavLink>
    <NavLink to="/Ourwork">Our Work</NavLink>
    <NavLink to="/Pricing">Pricing</NavLink>
    <NavLink to="/Aboutus">About Us</NavLink>
  </>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center gap-5">
          <NavLinks />
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={toggleNavbar}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center gap-4 p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <NavLinks />
        <Button className="mt-5">Book a Call</Button>
        {/* Close Button */}
        <button
          onClick={toggleNavbar}
          className="mt-5 text-gray-600 hover:text-black"
        >
          Close Menu
        </button>
      </div>
    </>
  );
};

export default Nav;
