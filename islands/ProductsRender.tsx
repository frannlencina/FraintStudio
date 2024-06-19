import { useState } from "preact/hooks";
import ProductCard from "../components/ProductCard.tsx";
import { ProductStructure } from '../utils/Interfaces.ts'

interface Props {
    productsData: ProductStructure[];
}

export default function ProductsRender({productsData}: Props) {

  const tags: string[] = ["Todo", "Landing page", "Web"];
  const [tagSelected, setTagSelected] = useState("Todo");
  const dataFilter = tagSelected === 'Todo' ? productsData : productsData.filter((item) => item.tags.includes(tagSelected));

  return (
    <div class="flex flex-col gap-12">

      <div class="mt-12 text-black">
        <h4 class="font-bold text-xl mb-2 ml-2">Filtrar <i class="ri-corner-right-down-line text-orange-600"></i></h4>  
      <div class="flex gap-3 text-md font-medium m-4 ">
        {tags.map((item) => (
          <button
            class={ item == tagSelected ? `text-white bg-orange-600 px-2 py-1 rounded-full` : `text-stone-700 hover:text-orange-600 transition-all duration-200`  }
            key={item}
            onClick={() => setTagSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <hr class="my-6 max-w-3xl mx-auto" />
      </div>
      <div class="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-4 p-2 sm:p-8 gap-4 min-[350px]:gap-6">
        {dataFilter.map((item, index) => (
          <ProductCard product={item} index={index} />
        ))}
      </div>
    </div>
  );
}
