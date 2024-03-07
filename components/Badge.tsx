interface Data {
  text: string;
  textGradient: string;
  link: string;
}

export default function Badge(props: Data) {
  return (
    <a
      href={props.link}
      class="flex text-sm items-center gap-2 border border-[#CCCCCC] bg-white bg-opacity-40 px-4 py-1.5 rounded-full shadow-[0px_0px_52px_-27px_rgba(0,0,0,0.75)]"
    >
      <p class="font-regular opacity-80">{props.text}</p>
      <p class="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#B78400] to-[#FFEF9D]">
        {props.textGradient}
      </p>
      <i class="ri-arrow-right-s-line opacity-80"></i>
    </a>
  );
}
