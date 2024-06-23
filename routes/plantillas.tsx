import ProductsRender from "../islands/ProductsRender.tsx";
import BannerNews from "../components/BannerNews.tsx";
import ProductsData from "../store/products/ProductsData.json" with {
  type: "json",
};

export default function PlantillasPage() {
  
  return (
    <main class="min-h-screen mx-auto max-w-6xl flex flex-col justify-center items-center w-full bg-[#F1F1F1]">
      <section>
        <BannerNews
          push="NO TE LO PIERDAS !"
          title="OFERTA"
          description="ENVIO RAPIDO"
        />
      </section>
      <section>
        <ProductsRender productsData={ProductsData} />
      </section>
    </main>
  );
}
