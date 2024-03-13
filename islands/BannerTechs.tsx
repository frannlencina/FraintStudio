export default function BannerTech() {
  const techImages = [
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/Astro_bm0pxw.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/Deno_Fresh_iuxfjs.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/Javascript_ksqf4r.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/MongoDb_mtadfb.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/NextJS_n2jgq9.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/ReactJS_iv07od.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/Supabase_uno7wb.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775150/TailwindCSS_awysry.png",
    "https://res.cloudinary.com/dctldwa03/image/upload/v1709775148/TypeScript_p9mxho.png",
  ];
  return (
    <div class="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-9 items-center justify-center gap-12 min-h-32 select-none">
      {techImages.map((tech, key) => (
        <div key={key}>
          <img width={50} height={50} src={tech} />
        </div>
      ))}
    </div>
  );
}
