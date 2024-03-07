export default function StepsRender() {
  const steps = [
    {
      id: "01",
      title: "Formulario",
      description:
        "Danos informacion de tus necesidades o que buscas en la pagina web,",
    },
    {
      id: "02",
      title: "Cotizacion",
      description:
        "Analisamos tus necesidades y en base a los que buscas creamos una cotizacion del proyecto.",
    },
    {
      id: "03",
      title: "Aprobacion",
      description: "Aprobacion y envio de archivos/informacion necesaria.",
    },
    {
      id: "04",
      title: "Diseño & Programacion",
      description:
        "Diseño y protitipo del proyecto, siempre nos seguiras en el proceso. Luego programamos, optimizamos SEO y performance.",
    },
    {
      id: "05",
      title: "Lanzamiento",
      description: "Aprobacion del proyecto final y lanzamiento en la web.",
    },
  ];
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 p-4 md:grid-cols-5 gap-4 max-w-[1400px] mx-auto py-48">
      {steps.map((steps, key) => (
        <div class="p-4 border rounded-xl cursor-default" key={key}>
          <span class="font-bold text-lg">{steps.id}</span>
          <h2 class="font-regular text-lg" >{steps.title}</h2>
          <p class="opacity-80 text-sm">{steps.description}</p>
        </div>
      ))}
    </div>
  );
}
