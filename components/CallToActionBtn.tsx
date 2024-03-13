
export default function CallToActionBtn() {
  return (
    <div class="flex gap-4 my-8 text-center items-center ">
      <a
        class="text-[#09090B] text-sm sm:text-md md:text-lg px-4 py-2 rounded-full border border-[#CCCCCC] hover:bg-[#09090B] hover:text-white hover:scale-105 transition-all duration-200 "
        href="/plantillas"
      >
        Explorar plantillas
      </a>
      <a
        class="bg-[#09090B] text-white text-sm sm:text-md md:text-lg px-4 py-2 rounded-full hover:bg-transparent hover:text-[#09090B] hover:scale-105 border border-white hover:border hover:border-[#CCCCCC] transition-all duration-200"
        href="/cotizacion"
      >
        Cotización única
      </a>
    </div>
  );
}
