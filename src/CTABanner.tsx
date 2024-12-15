import Background from "./assets/Banner/banner.svg";
import { Button } from "./components/ui/button";

const CTABanner = () => {
  return (
    <section className="p-5 sm:p-10 lg:p-20">
      <div
        className="cta_banner mx-auto flex flex-col items-center justify-center gap-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 sm:flex-row sm:p-12 lg:p-20"
        style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Left Section */}
        <h1 className="text-3xl font-bold text-center sm:text-left lg:text-4xl">
          Elevate Your Brand Today!
        </h1>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <p className="text-base lg:text-lg">
            Ready to transform your digital presence? Let's create magic together! Book our services now!
          </p>
          <Button className="w-full sm:w-auto px-6 py-3 text-black bg-white hover:bg-gray-200">
            Book Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
