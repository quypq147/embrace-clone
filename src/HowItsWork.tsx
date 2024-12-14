import Img from "./assets/frame_111.png";
import Discovery from "./assets/HowItsWorkAssets/discovery.svg";
import Execution from "./assets/HowItsWorkAssets/execution.svg";
import Measurement from "./assets/HowItsWorkAssets/Measurement.svg";
import Strategy from "./assets/HowItsWorkAssets/strategy.svg";

const HowitsWork = () => {
  return (
    <section className="p-10 grid mx-auto justify-center items-center gap-10 sm:flex">
      <div className="group-1 grid gap-5">
        <div className="frame_111">
          <h1>How It Works</h1>
          <p>
            We believe that the best way to create successful marketing
            campaigns is to work closely with our clients to understand their
            goals and challenges.
          </p>
        </div>
        <img className="w-80 h-50" src={Img} />
      </div>
      <div className="group-2 grid gap-5">
        <div className="frame_106 flex gap-5">
          <img src={Discovery} />
          <div className="chld-group">
            <h1 className="text-3xl">Discovery</h1>
            <p className="text-sm">
              We meet with you to learn about your business, your goals, and
              your target audience.
            </p>
          </div>
        </div>
        <div className="frame_107 flex gap-5">
          <img src={Strategy} />
          <div className="chld-group">
            <h1 className="text-3xl">Strategy</h1>
            <p className="text-sm">
              We develop a customized marketing strategy that is based on your
              unique needs and goals.
            </p>
          </div>
        </div>
        <div className="frame_108 flex gap-5">
          <img src={Execution} />
          <div className="chld-group">
            <h1 className="text-3xl">Execution</h1>
            <p>
              We execute our strategy using the latest digital marketing tools
              and techniques.
            </p>
          </div>
        </div>
        <div className="frame_109 flex gap-5">
          <img src={Measurement} />
          <div className="chld-group">
            <h1 className="text-3xl">Measurement</h1>
            <p>
              We track the results of our campaigns so that we can make
              adjustments as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitsWork;
