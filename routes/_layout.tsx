import { PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="layout">
      <Navbar />
        <Component />
      <Footer />
    </div>
  );
}
