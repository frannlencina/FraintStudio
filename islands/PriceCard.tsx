import { useState } from "preact/hooks";

interface Props {
  price: number;
}

export default function PriceCard({ price }: Props) {
  const [selectPrice, setSelectPrice] = useState(0);

  return (
    <div class="flex flex-col gap-5 mt-12">
      <div onClick={ ()=> {  setSelectPrice(1) } } class={ selectPrice == 1 ? `px-6 py-3 flex flex-col gap-2 border-solid border-black rounded-2xl border-4 max-w-full md:max-w-[65%] select-none cursor-pointer` : 'px-6 py-3 flex flex-col gap-2 border-dashed border-black rounded-2xl border-2 max-w-full md:max-w-[65%] select-none cursor-pointer'}>
        <p class="text-xl font-bold">$ {price}</p>
        <div class="flex justify-between">
          <p>Envio rapido</p>
          <p>Free</p>
        </div>
        <p class="text-xs opacity-60">de 24 a 48hrs</p>
      </div>
      <div onClick={ ()=> {  setSelectPrice(2) } } class={ selectPrice == 2 ? `px-6 py-3 flex flex-col gap-2 border-solid border-black rounded-2xl border-4 max-w-full md:max-w-[65%] select-none cursor-pointer` : 'px-6 py-3 flex flex-col gap-2 border-dashed border-black rounded-2xl border-2 max-w-full md:max-w-[65%] select-none cursor-pointer'}>
        <p class="text-xl font-bold">$ {price + 80}</p>
        <div class="flex justify-between">
          <p>Envio rapido</p>
          <p>Free</p>
        </div>
        <p class="text-xs opacity-60">de 24 a 48hrs</p>
        <div class="flex justify-between">
          <p>Exclusivo</p>
          <p>$80</p>
        </div>
        <p class="text-xs opacity-50 mt-2">
          Cuando compras un producto exclusivo, automáticamente será eliminado
          de la página y serás el único que lo tenga.
        </p>
      </div>
    </div>
  );
}
