import { useState } from "preact/hooks";
import ProjectsData from "../utils/ProjectsData.json" with { type: "json" };
import ProjectModal from "./ProjectModal.tsx";

export default function ProjectRender() {

  const [ showModal, setShowModal ]= useState(false);
  const [selectedProject, setSelectedProject ] = useState(null);

  const toggleModal = (id: any) => {
    setSelectedProject(id)
    setShowModal(!showModal);
    console.log(id)

  }
  return (
    <div class="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-6 max-w-5xl mx-auto py-32 overflow-hidden md:overflow-visible">
      
      { showModal ? <ProjectModal toggleModal={toggleModal} selectedProject={selectedProject} /> : '' }
      
      {ProjectsData.map((project, index) => (
        <div
          key={index}
          class="relative group scale-90 text-white flex flex-col md:hover:scale-110 hover:scale-100 md:scale-100 hover:ring-4 hover:ring-stone-200 hover:skew-x-2 hover:shadow-lg rounded-xl transition-all duration-200 select-none cursor-pointer"
          onClick={ () => { toggleModal(project.id) }}
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
            <div class="absolute group-hover: right-6 top-[50%]">
              <i class="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
