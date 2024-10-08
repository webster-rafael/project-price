import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleCloseMenu() {
    setOpenMenu(false);
  }
  return (
    <>
      <header className="fixed z-30 w-full h-24 bg-azulMain flex items-center justify-between px-4 sm:px-10">
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <nav className="hidden lg:flex items-center w-full justify-center gap-5 text-zinc-400">
          <a className="hover:text-zinc-50 hover:scale-105" href="">
            Home
          </a>
          <a className="hover:text-zinc-50 hover:scale-105" href="">
            Planos
          </a>
          <a className="hover:text-zinc-50 hover:scale-105" href="">
            Inteligência artificial
          </a>
          <a className="hover:text-zinc-50 hover:scale-105" href="">
            Contato
          </a>
        </nav>
        <span className="lg:hidden">
          {openMenu ? (
            <IoMdClose
              onClick={handleCloseMenu}
              className="size-8 text-zinc-500"
            />
          ) : (
            <HiOutlineMenuAlt4
              onClick={handleOpenMenu}
              className="size-8 text-zinc-500"
            />
          )}
        </span>
        <div className="hidden lg:block">
          <Button title="Orçamento" />
        </div>
      </header>
      {openMenu && (
        <div className="h-3/4 fixed pt-24 bg-azulMain w-full z-20 lg:hidden">
          <nav className="flex flex-col gap-3 p-4 text-zinc-400 border-t rounded-xl border-blue-950 h-full text-lg">
            <a href="">Home</a>
            <a href="">Planos</a>
            <a href="">Inteligência artificial</a>
            <a href="">Contato</a>
            <a href="">Suporte</a>
            <a href="">Termos de uso</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
