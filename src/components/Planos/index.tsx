import { useState } from "react";
import CardsPlanos from "./cardsPlanos";

const Planos = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  const planos = [
    {
      set: "basic",
      popular: false,
      title: "For solo designer",
      priceMensal: 190,
      priceAnual: 1900,
      subtitleMes: "por empresa, por mês",
      subtitleAno: "por empresa, por Ano",
      services: [
        "Comprehensive Dashboard",
        "Basic Budgeting Tools",
        "Monthly Financial Reports",
        "3 Financial Accounts",
        "Email Support",
      ],
    },
    {
      set: "premium",
      popular: true,
      title: "For solo designer",
      priceMensal: 290,
      priceAnual: 2900,
      subtitleMes: "por empresa, por mês",
      subtitleAno: "por empresa, por Ano",
      services: [
        "Comprehensive Dashboard",
        "Avanced Budgeting Tools",
        "Monthly Financial Reports",
        "4 Financial Accounts",
        "Email Support",
        "Account Support",
      ],
    },
    {
      set: "standard",
      popular: false,
      title: "For solo designer",
      priceMensal: 390,
      priceAnual: 3900,
      subtitleMes: "por empresa, por mês",
      subtitleAno: "por empresa, por Ano",
      services: [
        "Comprehensive Dashboard",
        "Avanced Budgeting Tools",
        "Monthly Financial Reports",
        "5 Financial Accounts",
        "Email Support",
        "Account Support",
        "IA and bots whatsapp",
      ],
    },
  ];

  return (
    <section className="py-10 w-full px-5 text-center 2xl:max-w-[1280px] 2xl:mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl">Conheça nossos planos</h1>
        <p className="text-zinc-400 px-3">
          Created to Simplify Your Experience and Unlock the Advantages of
          CloudPeak's Innovative Technologies
        </p>
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center w-full gap-5">
            <span
              className={`${!isMonthly ? "text-zinc-500" : "text-zinc-50"}`}
            >
              Mensal
            </span>
            <div
              className="w-16 h-8 bg-blue-600 rounded-full p-1 flex items-center cursor-pointer"
              onClick={togglePlan}
            >
              <div
                className={`w-6 h-6 bg-zinc-50 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  isMonthly ? "translate-x-0" : "translate-x-8"
                }`}
              ></div>
            </div>
            <span className={`${isMonthly ? "text-zinc-500" : "text-zinc-50"}`}>
              Anual
            </span>
          </div>

          {/* =============== PlanosCards ================== */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {planos.map((card, index) => (
              <CardsPlanos
                key={index}
                set={card.set}
                popular={card.popular}
                title={card.title}
                priceMensal={card.priceMensal}
                priceAnual={card.priceAnual}
                subtitleMes={card.subtitleMes}
                subtitleAno={card.subtitleAno}
                services={card.services}
                isMonthly={isMonthly}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planos;
