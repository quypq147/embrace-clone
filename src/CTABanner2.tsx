import { Button } from "./components/ui/button";
import ThunderSVG from "./assets/CTABanner2/Thunder.svg";
import ArrowUp from "./assets/CTABanner2/ArrowUp.svg";

function CTABanner2() {
  return (
    <section className="flex justify-center items-center m-5">
      <div
        className="cta_banner flex flex-col sm:flex-row items-center justify-between gap-6 mx-auto p-8 rounded-lg sm:p-12 lg:p-20"
        style={{ backgroundColor: "#232038" }}
      >
        {/* Text Content */}
        <div className="banner_content grid gap-6 text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Start Your Journey With Us Now
          </h1>
          <Button
            className="w-36 py-3 text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Now
          </Button>
        </div>

        {/* Circle with Overlay Images */}
        <div
          className="relative w-72 h-72 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#E0FF22" }}
        >
          {/* Thunder Icon */}
          <img
            src={ThunderSVG}
            alt="Thunder"
            className="absolute left-8 right-25 bottom-0 top-0 m-auto"
          />

          {/* Arrow Up Icon */}
          <img
            src={ArrowUp}
            alt="Arrow Up"
            className="absolute left-25 right-8 bottom-0 top-0 m-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default CTABanner2;

