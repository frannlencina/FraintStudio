import { useState } from "preact/hooks";

function NavbarMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div class="text-2xl w-full">
      <div class="relative z-20">
        <button class="text-orange-600 text-2xl font-bold" onClick={toggleMenu}>
          {showMenu
            ? <i class="ri-close-line"></i>
            : <i class="ri-menu-line"></i>}
        </button>
      </div>
          <div
            class={`transition-all fixed top-0 left-0 z-20  min-h-[2000px] duration-500 ease-in-out overflow-hidden ${
              showMenu ? "max-w-[80%]" : "max-w-0"
            }`}
          >
            <div class="flex mt-20 justify-start py-6 px-12 pt-24 items-start flex-col bg-white h-screen text-orange-600 font-bold">
              <div class="flex flex-col gap-4">
                <a
                  class="hover:opacity-50 transition-all duration-200 "
                  href="/plantillas"
                >
                  Explorar plantillas
                </a>
                <a
                  class="hover:opacity-50 transition-all duration-200"
                  href="/cotizacion"
                >
                  Cotización única
                </a>
              </div>
              <div class="flex flex-col gap-4">
                <a
                  class="hover:opacity-50 transition-all duration-200"
                  href="/proyectos"
                >
                  Proyectos
                </a>
                <a
                  class="hover:opacity-50 transition-all duration-200"
                  href="/contact-us"
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
