import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AmeliaAva from "./assets/Client/Amelia.png";
import JacobJoshuaAva from "./assets/Client/Jacob_Joshua.png";
import JacobJamesAva from "./assets/Client/Jacob_James.png";

function Testimonial() {
  const [position, setPosition] = useState(0);

  const testimonials = [
    {
      name: "Amelia Joseph",
      title: "Chief Manager",
      content:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      ava: AmeliaAva,
    },
    {
      name: "Jacob Joshua",
      title: "Chief Manager",
      content:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it’s got to be Embrace!",
      ava: JacobJoshuaAva,
    },
    {
      name: "Jacob James",
      title: "Creative Head",
      content:
        "Embrace really nails it! Creativity meets approachable style. They’re a team where artistry meets strategy. Thrilling outcomes and stellar collaboration!",
      ava: JacobJamesAva,
    },
  ];

  const nextSlide = () => {
    setPosition((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setPosition((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full flex flex-col gap-10 p-8 sm:p-16">
      {/* Title and Navigation Flex */}
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto mb-4">
        <h1 className="text-3xl sm:text-5xl font-bold">
          What Our Client Said About Us
        </h1>
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="overflow-hidden w-full max-w-5xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`min-w-full flex flex-col gap-4 p-8 rounded-lg ${
                position === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.ava}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      position === index ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      position === index ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>
              {/* Content */}
              <p
                className={`leading-relaxed ${
                  position === index ? "text-gray-100" : "text-gray-700"
                }`}
              >
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;


