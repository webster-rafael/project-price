const Serviços = () => {
  const services = [
    {
      title: "Streamlined Workflow",
      content:
        "Effortlessly Collaborate Across Teams and Projects with CloudPeak's Seamless and Intuitive Collaboration Tools",
    },
    {
      title: "Robust Data Security",
      content:
        "Protect Your Sensitive Information with Cutting-Edge Encryption and Security Measures solutions",
    },
  ];
  return (
    <section className="py-10 px-5 2xl:max-w-[1280px] 2xl:mx-auto">
      <div className="flex flex-col gap-6 items-center text-center">
        <h1 className="text-3xl">We Help Transforms Your Business</h1>
        <p className="text-zinc-400">
          Our mission is to empower individuals and organizations to unleash
          their creative potential.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="h-64 p-5 gap-4 border border-blue-950 shadow-cardServices rounded-3xl flex flex-col items-center justify-center"
            >
              <span className="rounded-full size-12 shadow-cardServices flex items-center justify-center bg-[rgb(16, 22, 54)]">
                <img src="/service-1.svg" alt="" />
              </span>
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-sm text-zinc-400">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serviços;
