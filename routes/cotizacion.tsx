export default function CotizacionPage() {
  const inputStyle = "border border-stone-300 p-2 rounded-lg ";
  return (
    <main id="Cotizacion" class="w-full py-6">
      <section class="mx-auto max-w-6xl">
        <div class="text-center flex flex-col gap-4 justify-center items-center">
          <h1 class="font-black text-6xl max-w-2xl">
            Cotización en Minutos y Sin Costo
          </h1>
          <h2 class="font-regular text-2xl max-w-2xl opacity-50">
            Rellena nuestro formulario y recibe una cotización personalizada de
            manera rápida y totalmente gratuita.
          </h2>
        </div>
        <div class="flex items-center justify-center mx-auto">
          <span class="text-[#2563EB] bg-[#EFF6FF] tex-sm px-2 py-1 rounded-lg mt-44 mb-12 w-fit">
            Es importante que el mail sea correctamente escrito, ahí se enviará
            nuestra respuesta.
          </span>
        </div>
        <form class="flex flex-col gap-4 max-w-xl mx-auto" action="">
          <div class="flex justify-center gap-4 mb-6">
            <div class="flex flex-col w-full">
              <label class="font-medium" htmlFor="name">Nombre</label>
              <input
                class={inputStyle}
                type="text"
                name="name"
                placeholder="Introduce tu nombre"
              />
            </div>

            <div class="flex flex-col w-full">
              <label class="font-medium" htmlFor="email">
                Correo electronico
              </label>
              <input
                type="text"
                name="email"
                class={inputStyle}
                placeholder="Introduce tu correo electronico"
              />
            </div>
          </div>

          <h4 class="font-medium">Cuentanos sobre tu proyecto</h4>
          <span class=" text-md opacity-60">
            Ideas, paginas, funcionalidades y cosas que te gustaria que tenga.
          </span>
          <textarea
            name="aboutProject"
            id="aboutProject"
            class="border border-stone-200 rounded-xl p-4 text-lg"
            placeholder="Cuentanos..."
            rows={6}
            cols={60}
          >
          </textarea>

          <div class="flex gap-4">
            <label htmlFor="web">Pagina web de ejemplo/inspiracion</label>
            <span class="text-xs bg-stone-100 w-fit border border-stone-200 px-2 py-1 rounded-lg">
              Opcional
            </span>
          </div>
          <input
            class={inputStyle+ ' w-fit'}
            name="web"
            type="text"
            placeholder="www.fraintstudio.com"
          />
        </form>
        <hr class="my-6" />
        <div class="max-w-xl mx-auto">
          <button class="border border-stone-300 p-2 rounded-lg w-full bg-white">Enviar formulario</button>
        </div>
      </section>
    </main>
  );
}
