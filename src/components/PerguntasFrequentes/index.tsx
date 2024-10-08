/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useSpring, animated } from "react-spring";

const PerguntasFrequentes = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const perguntasRespostas = [
    {
      pergunta: "What is CloudPeak?",
      respostas:
        "CloudPeak is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity.",
    },
    {
      pergunta: "What services does CloudPeak offer?",
      respostas:
        "CloudPeak offers a cloud-based platform with a comprehensive suite of SaaS tools designed to simplify business operations, enhance collaboration, and increase efficiency.",
    },
    {
      pergunta: "What are the core features of CloudPeak?",
      respostas:
        "CloudPeak provides a cloud-based platform featuring a suite of SaaS products that streamline business functions, enhance team collaboration, and improve productivity.",
    },
    {
      pergunta: "How can CloudPeak help my business?",
      respostas:
        "CloudPeak cloud-based platform provides a range of SaaS solutions designed to simplify business processes, improve team collaboration, and boost efficiency.",
    },
    {
      pergunta: "Is CloudPeak suitable for businesses of all sizes?",
      respostas:
        "CloudPeak has been key to our achievements. Their user-friendly platform and responsive customer service have been invaluable. Partner with NimbusTech.",
    },
  ];

  function toggleModal(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="px-5 py-10 2xl:max-w-[1280px] 2xl:mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl lg:text-4xl text-center">
          Perguntas Frequentes
        </h1>
        <p className="text-zinc-400 px-3 text-center">
          Haven’t found what you’re looking for? Contact us
        </p>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-5 py-10">
            {perguntasRespostas.map((item, index) => {
              const isOpen = openIndex === index; 
              const style = useSpring({
                height: isOpen ? "auto" : "0px",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                overflow: "hidden",
                config: { duration: 500 },
              });

              // Estilo de rotação do botão
              const rotateStyle = useSpring({
                transform: isOpen ? "rotate(360deg)" : "rotate(0deg)",
                config: { duration: 300 }, // Duração do giro
              });

              return (
                <div
                  className="space-y-5 border-b border-blue-950 pb-5"
                  key={index}
                >
                  <div className="flex justify-between w-full items-center">
                    <h1 className="text-xl w-3/4">{item.pergunta}</h1>
                    <animated.div
                      style={rotateStyle}
                      className="cursor-pointer"
                    >
                      {isOpen ? (
                        <IoRemove
                          onClick={() => toggleModal(index)}
                          className="size-7"
                        />
                      ) : (
                        <IoAdd
                          onClick={() => toggleModal(index)}
                          className="size-7"
                        />
                      )}
                    </animated.div>
                  </div>
                  <animated.div style={style}>
                    {isOpen && (
                      <div className="bg-blue-950 shadow-cardServices p-7 rounded-2xl lg:text-xl">
                        <p>{item.respostas}</p>
                      </div>
                    )}
                  </animated.div>
                </div>
              );
            })}
          </div>
          <div className="h-full hidden lg:flex justify-center items-center">
            <img
              className="w-[90%] mx-auto mix-blend-lighten border border-blue-950 rounded-xl"
              src="/duvidas-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerguntasFrequentes;
