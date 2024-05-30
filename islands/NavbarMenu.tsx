import { useState } from "preact/hooks";

function NavbarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div class="text-2xl w-full">
      <div class="fixed top-8 right-6 z-40">
        <button class="text-orange-600 text-2xl font-bold " onClick={toggleMenu}>
          {showMenu
            ? <i class="ri-close-line"></i>
            : <i class="ri-menu-line"></i>}
        </button>
      </div>
      <div
        class={`transition-all fixed top-0 left-0 z-20 min-h-[2000px] duration-500 ease-in-out overflow-hidden ${
          showMenu ? "max-w-[80%] border-r-4 border-stone-200" : "max-w-0"
        }`}
      >
        <div class="flex items-start py-6 px-12 pt-24  flex-col bg-white h-screen text-orange-600 font-bold">
          <div>
            <a class="group relative -top-16 flex gap-2 items-center text-2xl" href="/">
              <span class="font-black text-[#EA580C] group-hover:scale-110 transition-all duration-200">
                Fraint
              </span>
              <span class="font-light text-black group-hover:-translate-x-6 group-hover:opacity-0 group-hover:font-bold group-hover:text-[#EA580C] transition-all duration-200">
                Studio
              </span>
            </a>
          </div>
          <div class="flex flex-col gap-4">
            <a
              class="hover:opacity-50 transition-all duration-200"
              href="/cotizacion"
            >
              Cotización única
            </a>
            <a
              class="hover:opacity-50 transition-all duration-200"
              href="/#Proyectos"
            >
              Proyectos
            </a>
            <a
              class="hover:opacity-50 transition-all duration-200"
              href="/contactanos"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
