interface Props {
  title: string,
  description: string,
  push: string
}

export default function BannerNews({push, title, description}: Props) {
  return (
    <a href="" target="_blank" class="grid grid-cols-1 min-[350px]:grid-cols-2 bg-white hover:ring-4 hover:ring-orange-200 overflow-hidden rounded-xl md:relative -top-24 hover:opacity-60 cursor-pointer">
      <div class="flex flex-col py-4 pr-16 pl-4">
        <span class="opacity-50 text-sm">{push}</span>
          <h4 class="font-black sm:text-2xl">{title}</h4>
          <h5 class="font-black sm:text-2xl">{description}</h5>
        <span class="flex gap-2 items-center mt-3">
          <button class="text-white py-1 px-2 bg-orange-600 rounded-lg">
            Detalles
          </button>
          <i class="text-orange-600 ri-arrow-right-s-line"></i>
        </span>
      </div>
      <div class="bg-orange-600 flex items-center justify-center">
        <div class="bg-white rounded-full w-28">
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1718687664/test-memoji_rilkjo.png"
            alt=""
          />
        </div>
      </div>
    </a>
  );
}
    