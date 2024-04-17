import { Handlers } from "$fresh/server.ts";

type Data = {
  email: string;
  name: string;
  aboutProject: string;
  web: string;
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SEND_EMAIL = Deno.env.get("SEND_EMAIL");

export const handler: Handlers<Data | null> = {
  
  async POST(req, _ctx) {
  
    
    const { email, name, aboutProject, web } = (await req.json()) as Data;

    function executeEmail() {
     
      // Create the post request to send the email.

      const request = new Request("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Acme <onboarding@resend.dev>",
          to: [SEND_EMAIL],
          subject: "💰 Nueva cotizacion de proyecto.",
          html: `
                    <h1>Nombre: ${name}</h1>
                    <h2>Correo electrónico: ${email}</h2>
                    <p>Sobre el proyecto: ${aboutProject}</p>
                    <p>Página web de ejemplo/inspiración: ${web}</p>`,
        }),
      });
      console.log("las claves son " +RESEND_API_KEY + SEND_EMAIL);
      console.log("Cotizacion enviada correctamente");

      return fetch(request);
    }

    if (email.length > 0 || name.length > 0 || aboutProject.length > 0) {
      executeEmail();
    } else {
      console.log("Faltan datos.");
    }
    const ok = true;
    if (!ok) throw new Error("Ocurrio un error.");
    return new Response(JSON.stringify(req));
  },
};
