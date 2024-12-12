import Logo from "../assets/logo.svg";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="mx-auto w-full items-center top-0 z-[20] flex justify-between p-8">
      <img src={Logo}></img>
      <Nav />
      <Button className="hidden md:block">Book a Call</Button>
    </header>
  );
};
export default Header;
