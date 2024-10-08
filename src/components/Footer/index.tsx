import { BsArrowUpSquareFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="px-5 bg-gradient-to-b from-azulMain via-azulMain to-blue-800 py-10 w-full">
      <div className="flex flex-col gap-5 w-full">
        <div className="lg:flex space-y-4 items-center justify-between">
            <img className="w-56" src="/logo.svg" alt="Logo" />
            <p className="text-zinc-400">
              Solutions that drive success and propel your business forward
            </p>
        </div>
        <nav className="flex flex-col lg:flex-row lg:justify-center gap-4 text-zinc-300">
          <a className="hover:text-zinc-50" href="">
            Preços
          </a>
          <a className="hover:text-zinc-50 pb-3 lg:pb-0" href="">
            Entre em contato
          </a>
          <div className="border-b border-blue-950"></div>
          <a className="hover:text-zinc-50 pt-3 lg:pt-0" href="">
            Política de privacidade
          </a>
          <a className="hover:text-zinc-50" href="">
            Termos de uso
          </a>
        </nav>
        <span className="text-xs text-center">
          Copyright © 2024 FramerBite. Todos os direitos reservados
        </span>
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-4">
            <span>
              <FaInstagram className="size-6" />
            </span>
            <span>
              <FaFacebook className="size-6" />
            </span>
            <span>
              <FaWhatsapp className="size-6" />
            </span>
          </div>
          <span
            onClick={scrollToTop}
            className="flex items-center gap-2 font-semibold"
          >
            Voltar ao topo
            <BsArrowUpSquareFill className="size-7" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
