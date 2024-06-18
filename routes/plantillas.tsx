import ProductsRender from "../islands/ProductsRender.tsx";
import BannerNews from "../components/BannerNews.tsx"

export default function PlantillasPage() {
  return (
    <main class="min-h-screen mx-auto max-w-6xl flex flex-col justify-center items-center w-full bg-[#F1F1F1]">
      <section>
        <BannerNews />
      </section>
      <section>
        {/* Products Section  */}
        <div>{/* Categories  */}</div>
        <div class="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-4 p-2 sm:p-8 gap-4 min-[350px]:gap-6">
          <ProductsRender />
        </div>
      </section>
    </main>
  );
}
