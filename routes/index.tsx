import Badge from "../components/Badge.tsx";
import CallToActionBtn from "../components/CallToActionBtn.tsx";
import BannerTech from "../islands/BannerTechs.tsx";
import StepsRender from "../islands/StepsRender.tsx";

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
      <section>
        <div class="flex flex-col gap-4 items-center justify-center max-w-xl mx-auto text-center pt-32 ">
          <h2 class="font-black text-5xl">
            Descubre nuestros{" "}
            <span class=" bg-gradient-to-r from-[#ff7b004c] via-[#F39404] to-[#fead3353] bg-clip-text text-transparent">
              proyectos
            </span>{" "}
            realizados.
          </h2>
          <h4 class="text-lg font-regular opacity-70 max-w-lg">
            Explora nuestra galería de proyectos y descubre cómo damos vida a
            las ideas digitales.
          </h4>
        </div>
        <div class="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-4 max-w-5xl mx-auto py-32">
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt="Proyecto LetrasSinFiltro"
          />
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt="Proyecto LetrasSinFiltro"
          />
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt="Proyecto LetrasSinFiltro"
          />
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt="Proyecto LetrasSinFiltro"
          />
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt="Proyecto LetrasSinFiltro"
          />
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt="Proyecto LetrasSinFiltro"
          />
        </div>
      </section>
      <section id="Steps">
        <div class="max-w-6xl mx-auto pt-36">
          <h2 class="font-black text-5xl max-w-xl">
            A solo{" "}
            <span class="bg-gradient-to-r from-[#F39404] to-[#fead3370] bg-clip-text text-transparent">
              5 pasos
            </span>{" "}
            para tu éxito en linea.
          </h2>
          <h4 class="text-lg font-regular pl-12 mt-8 opacity-70 max-w-lg">
            Inicio sencillo, resultado excepcional. Comunicación ágil, reuniones
            mínimas para maximizar tiempo y eficiencia en cada paso.
          </h4>
        </div>
        <div>
          <StepsRender />
        </div>
      </section>
    </main>
  );
}
