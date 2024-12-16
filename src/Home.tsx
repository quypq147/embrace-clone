import HeroImg from "./assets/images/hero-img.png"
import "./styles/Home.css";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <section className="grid m-1 justify-center items-center sm:flex sm:m-10">
        <div className="hero-title grid gap-5">
            <div className="frame-104 grid gap-5">
                <h1 className="text-8xl flex-wrap frame-104_h1 mx-10">We Take Care Of Your Brand</h1>
                <p className="frame-104_p mx-10">We care about our work and we care about our clients</p>
            </div>
            <div className="frame-55 mx-10 flex gap-10">
                <input className="rounded-3xl border p-3 h-8 " placeholder="Enter your email"></input>
                <Button className="frame-55_btn rounded-3xl">Let's Talk</Button>
            </div>
        </div>
        <img src={HeroImg} className="hero-img w-fit p-10"></img>
    </section>
  )
}
