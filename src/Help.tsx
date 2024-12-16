import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "./components/ui/input";
import Arrow from "./assets/arrow.svg";

function Help() {
  return (
    <section className="justify-around items-center gap-10 m-5 grid sm:flex sm:m-20 sm:gap-20">
      {/* Left Section: FAQ */}
      <div className="group-1 w-full sm:w-1/2">
        <Accordion type="single" collapsible className="w-full">
          {/* Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-between items-center text-lg font-medium py-4 border-b">
              How do I sign up for the project?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-sm mt-2">
              To sign up for the project, please visit our sign-up page and fill
              out the registration form. You will need to provide your name,
              email address, and a password. Once you have submitted the form,
              you will receive a confirmation email. Click on the link in the
              email to verify your account and complete the sign-up process.
            </AccordionContent>
          </AccordionItem>

          {/* Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex justify-between items-center text-lg font-medium py-4 border-b">
              What thing should I prepare before starting?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-sm mt-2">
              <p className="font-bold">Before starting, you should prepare the following:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>A reliable internet connection.</li>
                <li>A computer or device that meets the project's technical requirements.</li>
                <li>Any necessary software or tools specified in the project guidelines.</li>
                <li>A quiet and comfortable workspace.</li>
                <li>A positive and proactive mindset.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex justify-between items-center text-lg font-medium py-4 border-b">
              Does my company need help for marketing advice?
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-sm mt-2">
              Yes, our company offers marketing advice to help you reach your target audience effectively. Our services include:
              <ul className="list-disc pl-5 mt-2">
                <li>Market research and analysis.</li>
                <li>Branding and positioning strategies.</li>
                <li>Digital marketing campaigns (SEO, SEM, social media).</li>
                <li>Content creation and management.</li>
                <li>Performance tracking and optimization.</li>
              </ul>
              Contact us to learn more about how we can assist you with your marketing needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Right Section: Newsletter */}
      <div className="group-2 grid gap-6 sm:w-1/2">
        <h1 className="text-2xl font-semibold sm:text-3xl">How We Can Help You?</h1>
        <p className="text-gray-500 leading-relaxed">
          Follow our newsletter. We will regularly update our latest project and availability.
        </p>

        {/* Email Input and Button */}
        <div className="frame_55 flex items-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md p-3 border"
          />
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
          >
            Let's Talk
          </Button>
        </div>

        {/* "More FAQ" Link */}
        <div className="group_587">
          <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
            <p className="font-medium">More FAQ</p>
            <img src={Arrow} alt="Arrow" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Help;

