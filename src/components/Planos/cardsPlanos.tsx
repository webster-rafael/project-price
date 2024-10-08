interface PropsCards {
  set: string;
  popular: boolean;
  title: string;
  priceMensal: number;
  priceAnual: number;
  subtitleMes: string;
  subtitleAno: string;
  services: string[];
  isMonthly: boolean;
}

const CardsPlanos = ({
  set,
  popular,
  title,
  priceMensal,
  priceAnual,
  subtitleMes,
  subtitleAno,
  services,
  isMonthly,
}: PropsCards) => {
  return (
    <div className="flex flex-col items-start rounded-3xl border border-blue-950 gap-7 shadow-cardServices py-10 px-6">
      <div className="text-start space-y-1">
        <div className="flex items-center gap-3">
          <h1 className="text-xl">
            {set.charAt(0).toUpperCase() + set.slice(1).toLowerCase()}
          </h1>
          <span
            className={`${
              popular == true ? "flex" : "hidden"
            } justify-center items-center bg-green-400 h-7 w-20 rounded-2xl text-sm`}
          >
            Popular
          </span>
        </div>
        <p className="text-sm text-blue-400">{title}</p>
      </div>
      <div className="w-full border-b border-blue-950"></div>
      <div className="text-start space-y-2">
        <span className="text-3xl font-semibold">
          {isMonthly
            ? priceMensal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            : priceAnual.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
        </span>
        <p className="text-sm text-zinc-500">
          {isMonthly ? subtitleMes : subtitleAno}
        </p>
      </div>
      <ul className="flex flex-col gap-4 p-2 h-60 lg:h-64">
        {services.map((item, index) => (
          <li key={index} className="flex w-full items-center gap-4">
            <img src="/confirmed.svg" alt="" />
            <span className="text-sm text-zinc-400">{item}</span>
          </li>
        ))}
      </ul>
      <button className="h-14 bg-gradient-to-r from-blue-500 via-blue-800 to-blue-900 hover:bg-blue-600 hover:scale-105 rounded-lg px-5 flex justify-center items-center font-semibold gap-2">
        Quero contratar
      </button>
    </div>
  );
};

export default CardsPlanos;
