import ProductsRender from "../islands/ProductsRender.tsx";
import BannerNews from "../components/BannerNews.tsx";

export default function PlantillasPage() {
  
  const fakeData = [
    {
      id: 1,
      name: "Fatsy",
      image:
        "https://res.cloudinary.com/dctldwa03/image/upload/v1718647667/test-product-image_ql99de.png",
      type: "Club de Fiestas",
      slug: "club-fiestas-1",
      description:
        "Pagina desarrollada y optimizada hacia automotoras lista para usar.",
      tags: ["Web"],
      price: 160,
    },
    {
      id: 2,
      name: "Haller",
      image:
        "https://res.cloudinary.com/dctldwa03/image/upload/v1718648243/Group_94_gamoqz.png",
      type: "Automotora",
      slug: "automotora-2",
      description:
        "Pagina desarrollada y optimizada hacia automotoras lista para usar.",
      tags: ["Web"],
      price: 180,
    },
    {
      id: 3,
      name: "Bugo",
      image:
        "https://res.cloudinary.com/dctldwa03/image/upload/v1718648243/image_47_a3exsp.png",
      type: "Food",
      slug: "food-2",
      description:
        "Pagina desarrollada y optimizada hacia automotoras lista para usar.",
      tags: ["Landing page", "Web"],
      price: 200,
    },
    {
      id: 4,
      name: "Fatsy",
      image:
        "https://res.cloudinary.com/dctldwa03/image/upload/v1718647667/test-product-image_ql99de.png",
      type: "Club de Fiestas",
      slug: "club-fiestas-2",
      description:
        "Pagina desarrollada y optimizada hacia automotoras lista para usar.",
      tags: ["Landing page"],
      price: 140,
    },
  ];

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
        <ProductsRender productsData={fakeData} />
      </section>
    </main>
  );
}
