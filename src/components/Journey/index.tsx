import { HiArrowTrendingUp } from "react-icons/hi2";
import Button from "../Button";

const Journey = () => {
  return (
    <section className="py-10 w-full px-5 space-y-10 2xl:max-w-[1280px] 2xl:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-6 items-center text-center">
          <h1 className="text-3xl">How CloudPeak Works</h1>
          <p className="text-zinc-400 px-3 sm:w-1/2">
            Designed to Simplify Your Experience and Maximize the Benefits of
            CloudPeak's Innovative Features
          </p>
          <div className="p-10 border rounded-3xl shadow-cardServices border-blue-950 space-y-5">
            <img src="/graficos-1.svg" alt="" />
            <div className="w-full border-t border-blue-950"></div>
            <div className="flex flex-col items-start shadow-cardServices p-5 rounded-xl bg-blue-950">
              <div className="flex gap-5">
                <span className="text-3xl">95%</span>
                <span className="flex items-center gap-1">
                  <HiArrowTrendingUp className="text-blue-500 size-6" />
                  9.2%
                </span>
              </div>
              <h1 className="text-zinc-400">Average revenue growth</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-center gap-4">
          <h1 className="text-3xl sm:w-3/5">
            Effortless Onboarding Process Fast.
          </h1>
          <p className="text-zinc-400 sm:w-3/5">
            Discover Our Streamlined and User-Friendly Onboarding Process,
            Designed to Get You Up and Running Quickly and Efficiently.
          </p>
          <div className="lg:hidden">
            <Button title="Saiba mais" />
          </div>
          <div className="p-6 border mt-5 border-blue-950 shadow-cardServices rounded-3xl">
            <img src="/graficos-2.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
