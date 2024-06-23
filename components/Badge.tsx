interface Data {
  text: string;
  textGradient: string;
  link?: string;
}

export default function Badge(props: Data) {
  return (
    <span
      class="flex text-xs sm:text-sm hover:ring-2 hover:ring-stone-200 font-medium opacity-75 items-center gap-2 border border-[#CCCCCC] bg-white bg-opacity-40 px-4 py-1.5 rounded-full shadow-[0px_0px_52px_-27px_rgba(0,0,0,0.75)] select-none"
    >
      <p class="font-regular opacity-80">{props.text}</p>
      <p class="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#B78400] to-[#FFEF9D]">
        {props.textGradient}
      </p>
      <i class="ri-arrow-right-s-line opacity-80"></i>
    </span>
  );
}
