interface Data {
  name: string;
  email: string;
  aboutProject: string;
  web?: string;
}

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const SEND_EMAIL = Deno.env.get("SEND_EMAIL")

Deno.serve(async (req) => {
  const data = (await req.json()) as Data;
  const { name, email, aboutProject, web } = data;

  const res = await fetch("https://api.resend.com/emails", {
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

  if (res.ok) {
    const data = await res.json();

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(data));
});
