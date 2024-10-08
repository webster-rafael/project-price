import Button from "../Button";

const Banner = () => {
  return (
    <section className="pt-24 h-fit">
      <div className="flex flex-col items-center justify-center text-center py-10 px-5 gap-7">
        <h1 className="text-4xl sm:text-6xl w-3/4 pt-10 text-center">
          Elevate Your Business with CloudPeak
        </h1>
        <p className="text-zinc-400 text-lg w-3/4 sm:w-2/4">
          Empowering Your Success with Cutting-Edge SaaS Solutions Built for
          Scalability, Efficiency, and Growth.
        </p>
        <Button title="Vamos começar" />
      </div>
    </section>
  );
};

export default Banner;
