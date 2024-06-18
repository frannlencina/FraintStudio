import NavbarMenu from '../islands/NavbarMenu.tsx'
export default function Navbar() {
  
  return (
    <div class="w-full h-24 bg-transparent">
      <div class="flex flex-row justify-between  p-4 pt-8 items-center font-medium text-black text-opacity-70 mx-auto max-w-6xl">
        <div class="w-36">
          <a class="group relative flex gap-2 items-center text-2xl" href="/">
            <span class="font-black text-[#EA580C] group-hover:scale-110 transition-all duration-200">Fraint</span>
            <span class="font-light text-black group-hover:-translate-x-6 group-hover:opacity-0 group-hover:font-bold group-hover:text-[#EA580C] transition-all duration-200">Studio</span>
          </a>
        </div>
        <div class="block sm:hidden"><NavbarMenu /></div>
        <div class="hidden sm:flex gap-4 ">
          <span class="group relative opacity-50  cursor-default transition-all duration-200">
          <span class=" absolute top-7 select-none pointer-events-none group-hover:block opacity-0 group-hover:opacity-100 duration-400 transition-all text-xs text-red-400 bg-red-600  rounded-full py-1 px-2">Proximamente</span>
            Explorar plantillas</span>
          <a class=" hover:opacity-50 transition-all duration-200" href="/cotizacion">Cotización única</a>
          
        </div>
        <div class="hidden sm:flex gap-4">
          <a class="hover:opacity-50 transition-all duration-200" href="/#Proyectos">Proyectos</a>
          <a class="hover:opacity-50 transition-all duration-200" href="/contactanos">Contactanos</a>
        </div>    
      </div>
    </div>
  );
}
