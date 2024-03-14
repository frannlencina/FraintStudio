import ProjectsData from '../utils/ProjectsData.json' with { type: "json" }

export default function ProjectRender() {
  return (
    <div class="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-6 max-w-5xl mx-auto py-32 overflow-hidden md:overflow-visible">
      {ProjectsData.map((project, index) => (
        <div
          key={index}
          class="relative group scale-90 text-white flex flex-col md:hover:scale-110 hover:scale-100 md:scale-100 hover:ring-4 hover:ring-stone-200 hover:skew-x-2 hover:shadow-lg rounded-xl transition-all duration-200 select-none cursor-pointer"
        >
          <div>
            <img class="rounded-xl" src={`${project.img}`} alt="" srcset="" />
          </div>
          <div class="absolute group-hover:block bg-[#F4960A]  w-full p-3 bottom-0 rounded-xl overflow-hidden max-h-0 opacity-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500">
            <div class="font-bold">
              {project.title}
            </div>
            <div class="opacity-60 text-xs max-w-[70%] truncate">
              {project.description}
            </div>
            <div class="absolute group-hover: right-6 top-[50%]"><i class="ri-arrow-right-line"></i></div>
          </div>
        </div>
      ))}
    </div>
  );
}
