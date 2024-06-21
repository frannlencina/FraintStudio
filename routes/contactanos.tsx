import FqAccordion from "../islands/FqAccordions.tsx";

const cardContactStyle = {
  card:
    "relative shadow-sm hover:ring-4 bg-white bg-opacity-50 hover:ring-orange-200 group text-start flex flex-col cursor-pointer hover:text-white hover:bg-orange-400 hover:scale-105 transition  justify-between  border border-stone-200 min-w-[280px] sm:min-w-[300px] sm:min-h-[200px] rounded-xl p-4",
  badge:
    "py-2 px-3 bg-stone-200 text-white w-fit rounded-lg group-hover:bg-orange-300 transition ",
};

export default function ContactanosPage() {
  return (
    <main class="max-w-6xl p-4 mx-auto text-black">
      <section id="Contactanos" class="flex flex-col text-center">
        <div class="my-24">
          <h1 class="font-extrabold text-6xl">Contacta con nosotros</h1>
          <h4 class="font-medium opacity-50">
            Haganos saber como podemos ayudarte
          </h4>
        </div>
        <div class="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href='mailto:franciscolencinap@gmail.com' target='_blank' class={cardContactStyle.card}>
            <span class={cardContactStyle.badge}>
              <i class="ri-mail-line"></i>
            </span>
            <span>
              <span class="font-bold">Gmail</span>
              <p class="opacity-60">Contactanos por gmail</p>
              <span></span>
              <span class="font-bold text-bold" href="#">
                franciscolencinap@gmail.com
              </span>
            </span>
          </a>

          <a href='https://www.twitter.com/franlencinaa' target='_blank' class={cardContactStyle.card}>
            <span class={cardContactStyle.badge}>
              <i class="ri-twitter-x-line"></i>
            </span>
            <span>
              <span class="font-bold">Twitter/X</span>
              <p class="opacity-60">Contactanos por twitter/x</p>
              <span></span>
              <span class="font-bold text-bold" href="#">
                twitter.com/franlencinaa
              </span>
            </span>
          </a>
        </div>
      </section>
      <hr class="mt-24" />
      <section class="flex flex-col justify-center items-center text-center">
        <div class="mt-36 mb-24 text-center">
          <h2 class="font-black text-5xl">Preguntas frecuentes</h2>
          <p class="max-w-xl opacity-60 text-xl mt-5">
            Tienes alguna pregunta o duda ? Checkea nuestro FAQ. Si no
            encuentras la pregunta o duda que estas buscando, por favor no dudes
            en contactarnos.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <FqAccordion />
        </div>
      </section>
    </main>
  );
}
