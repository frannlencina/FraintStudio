import { useState } from "preact/hooks";

export default function CotForm() {
  const inputStyle =
    "border border-stone-300 p-2 rounded-lg transition outline-stone-100 duration-200 focus:ring-2 focus:ring-stone-200 mt-2";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutProject: "",
    web: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData.name.length);
    // Enviar datos a la API
    if (
      formData.name.length > 1 || formData.email.length > 1 ||
      formData.aboutProject.length > 1
    ) {
      sendEmail();
    } else {
      alert('Todos los campos son obligatorios');
    }
  };

  async function sendEmail() {
    const headers = new Headers({
      "Content-Type": "text/plain",
    });
    const opts = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        aboutProject: formData.aboutProject,
        web: formData.web,
      }),
    };
    const rawPosts = await fetch("http://localhost:3000/api/resendapi", opts);
    console.log(rawPosts);
  }

  return (
    <>
      <form className="flex flex-col gap-4 max-w-xl mx-auto p-4" action="">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <div class="flex flex-col w-full">
            <label class="font-medium" htmlFor="name">
              Nombre
            </label>
            <input
              name="name"
              onInput={handleInputChange}
              value={formData.name}
              class={inputStyle}
              placeholder="Introduce tu nombre"
              required={true}
            />
          </div>

          <div class="flex flex-col w-full">
            <label class="font-medium" htmlFor="email">
              Correo electronico
            </label>
            <input
              onInput={handleInputChange}
              value={formData.email}
              name="email"
              class={inputStyle}
              type="text"
              placeholder="Introduce tu correo electronico"
              required={true}
            />
          </div>
        </div>

        <h4 className="font-medium">Cuentanos sobre tu proyecto</h4>
        <span className=" text-md opacity-60">
          Ideas, paginas, funcionalidades y cosas que te gustaria que tenga.
        </span>
        <textarea
          name="aboutProject"
          onInput={handleInputChange}
          value={formData.aboutProject}
          id="aboutProject"
          className="border border-stone-300 p-2 rounded-lg transition outline-stone-100 duration-200 focus:ring-2 focus:ring-stone-200 mt-2"
          placeholder="Cuentanos..."
          rows={6}
          cols={60}
          required={true}
        >
        </textarea>

        <div className="flex flex-col-reverse sm:flex-row gap-4 mt-6">
          <span className="text-xs bg-stone-100 w-fit border border-stone-200 px-2 py-1 rounded-lg">
            Opcional
          </span>
        </div>

        <label class="font-medium" htmlFor="web">
          Pagina web de ejemplo/inspiracion
        </label>
        <input
          name="web"
          onInput={handleInputChange}
          value={formData.web}
          class={inputStyle}
          placeholder="ej: www.fraintstudio.com"
        />

        <button
          onClick={handleSubmit}
          className="border border-stone-300 p-2 rounded-lg w-full bg-white hover:105 hover:bg-stone-200 transition focus:ring-2 focus:ring-stone-200 "
        >
          Enviar formulario
        </button>
      </form>
    </>
  );
}
