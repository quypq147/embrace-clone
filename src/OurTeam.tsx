import Member1PnG from "./assets/Member/mem_1.png";
import Member2PnG from "./assets/Member/mem_2.png";
import Member3PnG from "./assets/Member/mem_3.png";
import Member4PnG from "./assets/Member/mem_4.png";
import Member5PnG from "./assets/Member/mem_5.png";
import Member6PnG from "./assets/Member/mem_6.png";
import { Button } from "./components/ui/button";

function OurTeam() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 p-8 sm:flex-row sm:p-16">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8">
        <img src={Member1PnG} className="w-32 h-32 rounded-lg object-cover" alt="Team Member 1" />
        <img src={Member2PnG} className="w-32 h-32 rounded-lg object-cover" alt="Team Member 2" />
        <img src={Member3PnG} className="w-32 h-32 rounded-lg object-cover" alt="Team Member 3" />
        <img src={Member4PnG} className="w-32 h-32 rounded-lg object-cover" alt="Team Member 4" />
        <img src={Member5PnG} className="w-32 h-32 rounded-lg object-cover" alt="Team Member 5" />
        <img src={Member6PnG} className="w-32 h-32 rounded-lg object-cover" alt="Team Member 6" />
      </div>

      {/* Text Section */}
      <div className="flex sm:w-1/3 flex-col gap-6 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">Meet Our Team</h1>
        <p className="text-gray-600 leading-relaxed lg:text-lg">
          Discover the brilliance behind Embrace. Our team blends innovation and artistry to craft digital wonders that captivate.
        </p>
        <Button className="self-center sm:self-start bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Learn More
        </Button>
      </div>  
    </section>
  );
}

export default OurTeam;

