import Arrow from "./assets/arrow.svg";

const Commitments = () => {
  return (
    <section className="p-10 grid mx-auto justify-center items-center gap-10 sm:flex">
      <div className="group-1 grid gap-5">
        <div className="nhom_1 flex gap-5">
          <div className="ctn_1">
            <h1 className="text-3xl bold">245%</h1>
            <p>More revenus for the brand</p>
          </div>
          <div className="ctn_2">
            <h1 className="text-3xl bold">130K+</h1>
            <p>Audiences reached</p>
          </div>
        </div>
        <div className="nhom_2 flex gap-10">
          <div className="ctn_3">
            <h1 className="text-3xl bold">50+</h1>
            <p>Brands trust us</p>
          </div>
          <div className="ctn_4">
            <h1 className="text-3xl bold">24+</h1>
            <p>Worldwide awards</p>
          </div>
        </div>
      </div>
      <div className="group-2 grid gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">Commitment</h1>
          <p className="">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
        </div>
        <a href="#" className="flex gap-2">
          <p className="text-blue-600"> Learn More</p> <img src={Arrow} />
        </a>
      </div>
    </section>
  );
};

export default Commitments;
