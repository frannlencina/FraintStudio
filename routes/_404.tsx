import { Head } from "$fresh/runtime.ts";
import CallToActionBtn from "../components/CallToActionBtn.tsx";

export default function Error404() {
  return (
    <div class="min-h-screen mx-auto max-w-6xl flex flex-col justify-center items-center  w-full">
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 flex flex-col  justify-center items-center">
        <h1 class="font-black text-5xl sm:text-7xl md:text-9xl text-clip text-transparent bg-clip-text w-fit bg-gradient-to-r from-[#EA580C] via-[#EA580C] to-[#FFF5DA]">
          404 ERROR
        </h1>
        <h4 class="font-bold text-black opacity-80 text-xl sm:text-3xl max-w-md md:max-w-xl text-center mt-4">
          Lo sentimos, no se ha podido encontrar la pagina que buscas.
        </h4>
        <CallToActionBtn/>
        <a class="group relative flex items-center font-medium" href="/">
          <span class="group-hover:-translate-x-2 transition-all">
            <i class="ri-arrow-left-line"></i>
          </span>{" "}
          Inicio
        </a>
      </div>
    </div>
  );
}
