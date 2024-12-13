import Img from "./assets/frame_111.png";

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
        <img className="" src={Img}/>
      </div>
      <div className="group-2 grid gap-5">
        <div className="frame_106">

        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default HowitsWork;
