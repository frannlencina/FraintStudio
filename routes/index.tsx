import Badge from "../components/Badge.tsx";
import CallToActionBtn from "../components/CallToActionBtn.tsx";
import BannerTech from "../islands/BannerTechs.tsx";
import StepsRender from "../islands/StepsRender.tsx";
import FooterBanner from '../components/FooterBanner.tsx';
import ProjectRender from "../islands/ProjectRender.tsx";

import "https://deno.land/std@0.223.0/dotenv/load.ts";

export default function Home() {
  return (
    <main>
      <section id="Hero" class="Hero px-4 py-8 mx-auto">
        <div
          id="HeroChildren"
          class="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen"
        >
          <h1 class="font-black text-4xl md:text-6xl text-center max-w-3xl mb-6">
            Tu presencia online con la magia de{" "}
            <span class="bg-gradient-to-r from-[#EA580C] to-[#FFF5DA] text-transparent bg-clip-text ">
              Fraint Studios
            </span>
          </h1>
          <h4 class="text-xl md:text-2xl font-regular opacity-70 max-w-xl text-center">
            Expertos en diseño web que hacen realidad tus ideas.
          </h4>
          <div class="mb-48">
            <CallToActionBtn />
          </div>
          <Badge
            text="Tecnologías seleccionadas según tu proyecto para resultados "
            link="/"
            textGradient="óptimos."
          />
          <div class="mt-6">
            <BannerTech />
          </div>
        </div>
      </section>
      <section id="Proyectos">
        <div class="flex flex-col gap-4 items-center justify-center max-w-xl mx-auto text-center pt-32 ">
          <h2 class="font-black text-5xl">
            Descubre nuestros{" "}
            <span class=" bg-gradient-to-r from-[#ff7b004c] via-[#F39404] to-[#fead3353] bg-clip-text text-transparent">
              proyectos
            </span>{" "}
            realizados.
          </h2>
          <h4 class="text-lg font-regular opacity-70 max-w-lg">
          Explora nuestra galería de proyectos y descubre cómo damos vida a las ideas digitales.
          </h4>
        </div>
        <div>
          <ProjectRender />
        </div>
      </section>
      <section id="Steps">
        <div class="max-w-6xl mx-auto pt-36">
          <h2 class="font-black text-5xl max-w-xl">
            A solo{" "}
            <span class="bg-gradient-to-r from-[#F39404] to-[#fead3370] bg-clip-text text-transparent">
              5 pasos
            </span>{" "}
            para tuéxito en linea.
          </h2>
          <h4 class="text-lg font-regular pl-12 mt-8 opacity-70 max-w-lg">
          Inicio sencillo, resultado excepcional. Comunicación ágil, reuniones mínimas para maximizar tiempo y eficiencia en cada paso.
          </h4>
        </div>
        <div>
          <StepsRender />
        </div>
      </section>
      <FooterBanner />
    </main>
  );
}
