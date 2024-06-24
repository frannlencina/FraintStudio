import { Handlers } from "$fresh/server.ts";

import { config } from 'https://deno.land/x/dotenv/mod.ts';

type Data = {
  email: string;
  name: string;
  aboutProject: string;
  web: string;
};

export const handler: Handlers<Data | null> = {
  async POST(req, _ctx) {

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
    const SEND_EMAIL = Deno.env.get("SEND_EMAIL")

    const { email, name, aboutProject, web } = (await req.json()) as Data;

    function executeSend() {
      // Create a post request
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

      console.log(request.method); // POST
      console.log(request.headers.get("content-type")); // application/json

      return fetch(request);
    }

    executeSend();

    const ok = true;
    if (!ok) throw new Error("Something went wrong.");
    return new Response(JSON.stringify(req));
  },
};
