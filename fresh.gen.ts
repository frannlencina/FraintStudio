// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_emails_index from "./routes/api/emails/index.ts";
import * as $contactanos from "./routes/contactanos.tsx";
import * as $cotizacion from "./routes/cotizacion.tsx";
import * as $index from "./routes/index.tsx";
import * as $plantillas from "./routes/plantillas.tsx";
import * as $Accordion from "./islands/Accordion.tsx";
import * as $BannerTechs from "./islands/BannerTechs.tsx";
import * as $CotForm from "./islands/CotForm.tsx";
import * as $FqAccordions from "./islands/FqAccordions.tsx";
import * as $InputForm from "./islands/InputForm.tsx";
import * as $NavbarMenu from "./islands/NavbarMenu.tsx";
import * as $ProjectModal from "./islands/ProjectModal.tsx";
import * as $ProjectRender from "./islands/ProjectRender.tsx";
import * as $StepsRender from "./islands/StepsRender.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/emails/index.ts": $api_emails_index,
    "./routes/contactanos.tsx": $contactanos,
    "./routes/cotizacion.tsx": $cotizacion,
    "./routes/index.tsx": $index,
    "./routes/plantillas.tsx": $plantillas,
  },
  islands: {
    "./islands/Accordion.tsx": $Accordion,
    "./islands/BannerTechs.tsx": $BannerTechs,
    "./islands/CotForm.tsx": $CotForm,
    "./islands/FqAccordions.tsx": $FqAccordions,
    "./islands/InputForm.tsx": $InputForm,
    "./islands/NavbarMenu.tsx": $NavbarMenu,
    "./islands/ProjectModal.tsx": $ProjectModal,
    "./islands/ProjectRender.tsx": $ProjectRender,
    "./islands/StepsRender.tsx": $StepsRender,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
