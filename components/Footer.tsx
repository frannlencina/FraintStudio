export default function Footer() {
  return (
    <div class="w-full max-w-6xl mx-auto h-80 bg-transparent p-4 pt-24 text-sm">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
        <a class="hover:decoration hover:underline" href="/">Fraint Studio</a>
        <a class="hover:decoration hover:underline" href="/plantillas">
          Explorar plantillas
        </a>
        <a class="hover:decoration hover:underline" href="/cotizacion">
          Cotización única
        </a>
        <a class="hover:decoration hover:underline" href="/nosotros">
          Quienes somos
        </a>
        <a class="hover:decoration hover:underline" href="/contactanos">
          Contactanos
        </a>
      </div>
      <div class="grid text-center sm:text-start justify-center items-center grid-flow-cols-1 sm:grid-cols-2">
        <div>
          <span class="">© 2024 Fraint Studio, Inc. All rights reserved.</span>
          <p class="opacity-50 max-w-sm mb-2">
            All trade marks, logos and brand names are the property of their
            owners.
          </p>
          <span class="flex justify-center sm:justify-start gap-4 my-6 sm:my-0">
            <a class="hover:decoration hover:underline" href="/terms">
              Terms of Service
            </a>{" "}
            <a class="hover:decoration hover:underline" href="/privacy">
              Provacy Policy
            </a>
          </span>
        </div>
        <div class="inline-flex gap-2 justify-center sm:justify-end items-end h-full pb-4 sm:pb-0">
          <a href="/">
            <i class="ri-mail-line"></i>
          </a>
          <a href="/">
            <i class="ri-twitter-x-line"></i>
          </a>
          <a href="/">
            <i class="ri-user-line"></i>
          </a>
          <a href="/">
            <i class="ri-github-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
