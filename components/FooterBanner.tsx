import CallToActionBtn from "./CallToActionBtn.tsx";

export default function FooterBanner() {
  return (
    <div class="my-24">
      <div
        id="FooterBanner"
        class="flex text-black items-center py-12 md:py-0 justify-center flex-col max-w-[80%] lg:min-w-[944px] min-h-[450px] px-4 xl:max-w-6xl mx-auto rounded-3xl "
      >
        <h1 class="font-black text-center text-3xl md:text-5xl max-w-3xl">Ya estas preparado para brillar online junto a nosotros?</h1>
        <CallToActionBtn />
      </div>
    </div>
  );
}
