import { Button } from "./components/ui/button";
import BannerCircle from "./assets/CTABanner2/Circle2.svg";
import ThunderSVG from "./assets/CTABanner2/Thunder.svg";
import ArrowUp from "./assets/CTABanner2/ArrowUp.svg";

function CTABanner2() {
  return (
    <section className="justify-center items-center p-5 sm:p-10 lg:p-20">
      <div className="cta_banner text-center gap-6 mx-auto flex flex-col items-center justify-between p-8 rounded-lg sm:flex-row sm:p-12 lg:p-20" style={{ backgroundColor: "#232038" }}>
        <div className="banner_content grid gap-6">
          <h1 className="text-white text-6xl sm:text-start sm:mx-3">Start Your Journey With Us Now</h1>
          <Button className="w-20 items-center">Start Now</Button>
        </div>
        <img src={BannerCircle} width={250} height={250} />
      </div>
    </section>
  );
}

export default CTABanner2;
