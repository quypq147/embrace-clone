import AppleSvg from "./assets/OurWorks/apple.svg";
import CocaColaSvg from "./assets/OurWorks/coca_cola.svg";
import NikeSvg from "./assets/OurWorks/nike.svg";
import { Button } from "./components/ui/button";

const OurWorks = () => {
    return(
        <section className="p-10 grid text-center mx-auto justify-center items-center gap-10">
            <h1 className="text-5xl">Our Work</h1>
            <p>A glimpse of our portfolio</p>
            <div className="frame_67 grid gap-5 sm:flex">
                <div className="frame_67_1">
                    <img src={AppleSvg} alt="Apple" />
                    <p>Apple</p>
                </div>
                <div className="frame_67_2">
                    <img src={CocaColaSvg} alt="Coca Cola" />
                    <p>Coca Cola</p>
                </div>
                <div className="frame_67_3">
                    <img src={NikeSvg} alt="Nike" />
                    <p>Nike</p>
                </div>
            </div>
            <Button>See More</Button>
        </section>
    )
};

export default OurWorks;