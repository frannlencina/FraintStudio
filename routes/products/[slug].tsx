import ProductsData from "../../store/products/ProductsData.json" with {
  type: "json",
};
import { FreshContext } from "$fresh/server.ts";
import AuthorBadge from "../../components/AuthorBadge.tsx";
import { useState } from "preact/hooks";
import PriceCard from "../../islands/PriceCard.tsx";

export default function ProductsPage(ctx: FreshContext) {
  const { slug } = ctx.params;
  const product = ProductsData.find((item) => item.id === slug);

  return (
    <main class="flex flex-col justify-center items-center max-w-6xl min-h-screen p-4 mx-auto text-black">
      {product
        ? (
          <div>
            <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-3">
                <img class="rounded-xl w-full" src={product.image} alt="" />
                <div class="flex gap-3 overflow-x-auto">
                  {product.specifications.imagesCollection.map((
                    item,
                    index,
                  ) => (
                    <img
                      key={index}
                      class="h-32 rounded-xl"
                      src={item}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <div class="px-6 py-4">
                <div class="flex">
                  <AuthorBadge
                    name={product.author.name}
                    rank={product.author.rank}
                    img={product.author.img}
                  />
                </div>
                <div>
                  <h2 class="text-4xl font-black">{product.name}</h2>
                  <h4 class="text-xl opacity-65">{product.description}</h4>
                 <PriceCard price={product.price} />
                  <p class="opacity-60 text-xs max-w-xs mt-6">
                    Al comprar el producto aceptas los términos y condiciones
                    que aclara Fraint Studio.
                  </p>
                  <button class="bg-orange-600 my-4 mx-auto text-white rounded-lg px-4 py-2 font-bold hover:bg-transparent outline hover:outline-orange-600 hover:outline-2 hover:text-orange-600">
                  <i class="ri-whatsapp-line font-normal"></i>   Comprar
                  </button>
                 
                </div>
              </div>
            </section>
            <hr />
            <section class="flex-wrap p-4">
              <div class="flex flex-col gap-4 mt-6 max-w-2xl ">
                {product.specifications.specificationsCollection?.map((
                  item,
                ) => (
                  <div class=" py-4">
                    <h4 class="text-2xl sm:text-3xl font-bold text-orange-600">
                      {item.title}
                    </h4>
                    <p class="text-md sm:text-lg font-medium opacity-60">{item.data}</p>
                  </div>
                ))}
              </div>
              <div class="flex flex-col gap-5 mt-12 max-w-2xl md:ml-4 ">
                {product.specifications.techsCollections?.map((item) => (
                  <div>
                    <h4 class="font-bold text-xl mb-6">{item.type}</h4>
                    <ul class="flex flex-col gap-2">
                      {item.technologies?.map((item) => (
                        <li>
                          <p class="font-semibold text-lg opacity-70">
                            {item.name}
                          </p>
                          <p class="ml-2 opacity-60">{item.reason}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )
        : (
          <section class="flex flex-col justify-center items-center gap-4 mx-auto text-center p-4">
            <h2 class="font-bold text-3xl">
              No se ha encontrado ningún producto
            </h2>
            <a
              class="bg-[#09090B] w-fit text-white text-sm sm:text-md md:text-lg px-4 py-2 rounded-full hover:bg-transparent hover:text-[#09090B] hover:scale-105 border border-white hover:border-[#CCCCCC] transition-all duration-200"
              href="/"
            >
              <i class="ri-arrow-left-line"></i> Inicio
            </a>
          </section>
        )}
    </main>
  );
}
