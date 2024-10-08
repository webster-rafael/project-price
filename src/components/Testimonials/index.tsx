import CardsTestimonials from "./cardsTestimonials";

const Testimonials = () => {
  const depoimentos = [
    {
      texto:
        "CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!",
      nome: "Sarah Taranian",
      cargo: "Creative Director",
      foto: "/user-1.avif",
    },
    {
      texto:
        "I can't say enough good CloudP and their support team is incredibly responsive. They've helped us improve collaboration across our teams and achieve our business goals faster than we ever thought possible.",
      nome: "Emily Hudson",
      cargo: "Art Director",
      foto: "/user-2.avif",
    },
    {
      texto:
        "Choosing CloudPeak was one of the best decisions we've made. Their platform has helped us centralize our data and streamline our processes, saving us time and money. Plus, their customer service team lp we need them.",
      nome: "John Depp",
      cargo: "Researcher",
      foto: "/user-3.avif",
    },
    {
      texto:
        "We've tried other t, but none compare to CloudPeak. Their platform is user-friendly, reliable, and packed with features that have helped us improve productivity and efficiency across our organization.",
      nome: "David Megan",
      cargo: "Engineer",
      foto: "/user-4.avif",
    },
    {
      texto:
        "CloudPeak has been instrumental in helping us achieve our business goals. Their platform is easy to use, and their customer service team is always there to help whenever we need them. Partner with CloudPeak.",
      nome: "Webster Rafael",
      cargo: "FullStack Developer",
      foto: "/user-6.png",
    },
  ];
  return (
    <section className="px-5 bg-azulMain/[0.99] rounded-xl py-10 2xl:max-w-[1280px] 2xl:mx-auto">
      <div className="text-center space-y-5">
        <h1 className="text-3xl">Trusted by 14,000+ users</h1>
        <p className="text-zinc-400 px-3">
          Sharing Their Successes and Transformative Experiences with
          CloudPeak's Powerful SaaS Solutions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {depoimentos.map((item, index) => (
            <CardsTestimonials
              key={index}
              texto={item.texto}
              nome={item.nome}
              cargo={item.cargo}
              foto={item.foto}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
