import { ProductStructure } from '../utils/Interfaces.ts'

interface Props {
    product: ProductStructure,
    index: number
}

export default function ProductCard({ product, index }: Props) {
  return (
    <a
      href={`plantillas/product/` + product.slug}
      class="bg-white rounded-b-3xl text-black max-w-[200px] min-[500px]:max-w-sm hover:text-orange-600 cursor-pointer transition-all"
      key={index}
    >
      <div class=" object-cover  overflow-hidden">
        <img
          class="object-cover"
          src={product.image}
          alt="Previsualizacion de pagina web"
          srcset=""
        />
      </div>
      <hr class="mx-auto max-w-[80%] my-4" />
      <span class="flex gap-2 px-2 py-1 bg-[#FFDDCB] text-xs text-orange-600 w-fit rounded-full ml-3">
        <i class="ri-box-3-line"></i> {product.tags[0]}
      </span>
      <div class="flex flex-col gap-8 ml-2 p-4">
        <div class="flex flex-col">
          <h4 class="font-bold opacity-65">{product.type}</h4>
          <p class=" opacity-35 max-w-md ">{product.description}</p>
        </div>
        <div class="flex justify-between">
          <span class="font-bold">${product.price} USD</span>
        </div>
      </div>
    </a>
  );
}
