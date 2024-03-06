import NavbarMenu from '../islands/NavbarMenu.tsx'
export default function Navbar() {
  
  return (
    <div class="w-full h-24 bg-white">
      <div class="flex flex-row justify-between p-4 items-center font-medium text-black text-opacity-70 text-lg mx-auto max-w-6xl">
        <div class="w-36">
          <a class="group relative flex gap-2 items-center text-2xl " href="/">
            <span class="font-black text-[#EA580C] group-hover:scale-125 transition-all duration-200">Fraint</span>
            <span class="font-light text-black group-hover:-translate-x-6 group-hover:opacity-0 group-hover:font-bold group-hover:text-[#EA580C] transition-all duration-200">Studio</span>
          </a>
        </div>
        <div class="block sm:hidden"><NavbarMenu /></div>
        <div class="hidden sm:flex gap-4 ">
          <a class="hover:opacity-50 transition-all duration-200" href="/plantillas">Explorar plantillas</a>
          <a class="hover:opacity-50 transition-all duration-200" href="/cotizacion">Cotización única</a>
        </div>
        <div class="hidden sm:flex gap-4">
          <a class="hover:opacity-50 transition-all duration-200" href="/proyectos">Proyectos</a>
          <a class="hover:opacity-50 transition-all duration-200" href="/contact-us">Contactanos</a>
        </div>
      </div>
    </div>
  );
}
