interface Props {
  title: string,
  description: string,
  push: string
}

export default function BannerNews({push, title, description}: Props) {
  return (
    <div class="grid grid-cols-1 min-[350px]:grid-cols-2 text-black bg-white overflow-hidden rounded-xl mb-12">
      <div class="flex flex-col py-4 pr-16 pl-4">
        <span class="opacity-50 text-sm">{push}</span>
          <h4 class="font-black sm:text-2xl">{title}</h4>
          <h5 class="font-black sm:text-2xl">{description}</h5>
      
      </div>
      <div class="bg-orange-600 flex items-center justify-center">
        <div class="bg-white rounded-full w-28">
          <img
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1718687664/test-memoji_rilkjo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
    