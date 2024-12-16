import Logo from "./assets/logo.svg";
import { Button } from "./components/ui/button";
import FacebookSvg from "./assets/Social/facebook.svg";
import TwitterSvg from "./assets/Social/twitter.svg";
import InstagramSvg from "./assets/Social/instagram.svg";

function Bottom() {
  return (
    <section className="items-center grid gap-10 justify-around m-10 sm:flex">
      <div className="group_1 grid gap-10">
        <img src={Logo}/>
        <div className="social flex gap-10">
          <img src={InstagramSvg}></img>
          <img src={TwitterSvg}></img>
          <img src={FacebookSvg}></img>
        </div>
        <Button className="to-blue-600 text-white">Contact Us</Button>
      </div>
      <div className="group_2 flex gap-5">
        <div className="child_gr_1">
          <ul className="grid gap-5 text-wrap">
            <li>
              <a href="#" className="cursor-pointer">Work With Us</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">Advertise With Us</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer"> Suport Us</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">Bussiness Advice</a>
            </li>
          </ul>
        </div>
        <div className="child_gr_2">
          <ul className="grid gap-5 text-wrap">
            <li>
              <a href="#" className="cursor-pointer">Private Coaching</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">Our Work</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">Our Commitment</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">Our Team</a>
            </li>
          </ul>
        </div>
        <div className="child_gr_3">
          <ul className="grid gap-5 text-wrap">
            <li>
              <a href="#" className="cursor-pointer">About Us</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">FAQS</a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">Repost a Bug</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Bottom;
