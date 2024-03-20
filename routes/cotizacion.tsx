import CotForm from "../islands/CotForm.tsx";
import FqAccordions from "../islands/FqAccordions.tsx";

export default function CotizacionPage() {
  return (
    <main id="Cotizacion" className="w-full mx-auto max-w-6xl px-4 py-6">
      <section>
        <div className="text-center flex flex-col gap-4 justify-center items-center p-4">
          <h1 className="font-black text-4xl sm:text-6xl max-w-2xl">
            Cotización en Minutos y Sin Costo
          </h1>
          <h4 className="font-regular text-xl sm:text-2xl max-w-2xl opacity-50">
            Rellena nuestro formulario y recibe una cotización personalizada de
            manera rápida y totalmente gratuita.
          </h4>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <span className="text-[#2563EB] bg-[#EFF6FF] tex-sm px-2 py-1 rounded-lg mt-44 mb-12 w-fit m-4">
            Es importante que el mail sea correctamente escrito, ahí se enviará
            nuestra respuesta.
          </span>
        </div>
        <div>
          <CotForm />
        </div>
      </section>
      <hr className="mt-6" />
      <section className="my-44">
        <div>
          <h2 className="font-black text-2xl sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="text-lg max-w-xl opacity-60 mt-5">
            Tienes alguna pregunta o duda ? Chequea nuestro FAQ. Si no
            encuentras la pregunta o duda que estas buscando, por favor no dudes
            en contactarnos.
          </p>
        </div>
        <div className="flex justify-center max-w-4xl mx-auto flex-wrap gap-4 my-24">
          <FqAccordions />
        </div>
      </section>
    </main>
  );
}
