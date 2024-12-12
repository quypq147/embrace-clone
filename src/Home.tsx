import HeroImg from "./assets/images/hero-img.png"
import "./styles/Home.css";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <section className="grid m-1 sm:flex sm:m-10">
        <div className="hero-title">
            <div className="frame-104">
                <h1 className="text-8xl flex-wrap frame-104_h1">We Take Care Of Your Brand</h1>
                <p className="frame-104_p">We care about our work and we care about our clients</p>
            </div>
            <div className="frame-55 flex gap-5">
                <input className="rounded-3xl border p-3 h-8 " placeholder="Enter your email"></input>
                <Button className="frame-55_btn rounded-3xl">Let's Talk</Button>
            </div>
        </div>
        <img src={HeroImg} className="hero-img w-fit"></img>
    </section>
  )
}
