const Clientes = () => {
  const clientes = [
    {
      img: "/cliente-1.svg",
    },
    {
      img: "/cliente-2.svg",
    },
    {
      img: "/cliente-3.svg",
    },
    {
      img: "/cliente-4.svg",
    },
    {
      img: "/cliente-5.svg",
    },
  ];
  return (
    <section className="py-10 w-full relative 2xl:max-w-[1280px] 2xl:mx-auto">
      <div
        className="absolute w-full top-0 bg-[url('/bg.svg')] -z-10 bg-no-repeat bg-cover mt-[-130px] sm:mt-[-350px] lg:mt-[-450px] h-1/2 sm:h-full 2xl:mt-[-450px]"
        style={{ backgroundPosition: "center top" }} // ajusta a imagem
      ></div>

      <div className="flex flex-col h-full text-center gap-7 px-5">
        <div className="h-48 sm:h-72 lg:h-96 overflow-hidden">
          <img
            src="https://framerusercontent.com/images/JSakO3iDpBY0uvb9cOV7x278fQM.png"
            alt=""
          />
        </div>
        <h1 className="text-zinc-400">
          Trusted by thousands of companies worldwide
        </h1>
        <div>
          <ul className="flex flex-wrap gap-4 justify-center items-center">
            {clientes.map((item, index) => (
              <li key={index}>
                <img className="w-36" src={item.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
