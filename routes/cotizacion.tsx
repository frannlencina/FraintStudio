import FqAccordions from "../islands/FqAccordions.tsx";
import InputForm from "../islands/InputForm.tsx";

export default function CotizacionPage() {
  return (
    <main id="Cotizacion" class="w-full mx-auto max-w-6xl px-4 py-6">
      <section>
        <div class="text-center flex flex-col gap-4 justify-center items-center p-4">
          <h1 class="font-black text-4xl sm:text-6xl max-w-2xl">
            Cotización en Minutos y Sin Costo
          </h1>
          <h4 class="font-regular text-xl sm:text-2xl max-w-2xl opacity-50">
            Rellena nuestro formulario y recibe una cotización personalizada de
            manera rápida y totalmente gratuita.
          </h4>
        </div>
        <div class="flex items-center justify-center mx-auto">
          <span class="text-[#2563EB] bg-[#EFF6FF] tex-sm px-2 py-1 rounded-lg mt-44 mb-12 w-fit m-4">
            Es importante que el mail sea correctamente escrito, ahí se enviará
            nuestra respuesta.
          </span>
        </div>
        <form class="flex flex-col gap-4 max-w-xl mx-auto p-4" action="">
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <div class="flex flex-col w-full">
              <InputForm
                name="name"
                label="Nombre"
                placeholder="Introduce tu nombre"
              />
            </div>

            <InputForm
              name="email"
              label="Correo electronico"
              placeholder="Introduce tu correo electronico"
            />
          </div>

          <h4 class="font-medium">Cuentanos sobre tu proyecto</h4>
          <span class=" text-md opacity-60">
            Ideas, paginas, funcionalidades y cosas que te gustaria que tenga.
          </span>
          <textarea
            name="aboutProject"
            id="aboutProject"
            class="border border-stone-300 p-2 rounded-lg transition outline-stone-100 duration-200 focus:ring-2 focus:ring-stone-200 mt-2"
            placeholder="Cuentanos..."
            rows={6}
            cols={60}
          >
          </textarea>

          <div class="flex flex-col-reverse sm:flex-row gap-4 mt-6">
            <span class="text-xs bg-stone-100 w-fit border border-stone-200 px-2 py-1 rounded-lg">
              Opcional
            </span>
          </div>
          <InputForm
            name="web"
            label="Pagina web de ejemplo/inspiracion"
            placeholder="ej: www.fraintstudio.com"
            extraStyle=" w-fit"
          />
        </form>
        <div class="max-w-xl mt-6 mx-auto ">
          <button class="border border-stone-300 p-2 rounded-lg w-full bg-white hover:105 hover:bg-stone-200 transition focus:ring-2 focus:ring-stone-200 ">
            Enviar formulario
          </button>
        </div>
      </section>
      <hr class="mt-6 mb-24" />
      <section>
        <div>
          <h2 class="font-black text-2xl sm:text-4xl">Preguntas frecuentes</h2>
          <p class="text-lg max-w-xl opacity-60 mt-5">
            Tienes alguna pregunta o duda ? Chequea nuestro FAQ. Si no
            encuentras la pregunta o duda que estas buscando, por favor no dudes
            en contactarnos.
          </p>
        </div>
        <div class="flex justify-center max-w-4xl mx-auto flex-wrap gap-4 mt-12">
          <FqAccordions />
        </div>
      </section>
    </main>
  );
}
