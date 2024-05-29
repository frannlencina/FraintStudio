import ProjectData from "../utils/ProjectsData.json" with { type: "json" };
import { asset } from "$fresh/runtime.ts";

interface Props {
  toggleModal: () => void;
  selectedProject: number;
}

export default function ProjectModal({ toggleModal, selectedProject }: Props) {
  const project = ProjectData.find((project) => project.id === selectedProject);

  return (
    <div class="flex justify-center items-center my-auto fixed z-50 bg-black bg-opacity-80 w-full h-screen top-0 left-0">
      <div class="bg-white flex flex-col p-6 max-w-[80%] md:max-w-[65%] max-h-[90%] xl:max-h-[100%] rounded-xl overflow-y-scroll xl:overflow-hidden">
        <div class="relative flex justify-end w-full">
          <button
            class=" font-medium text-2xl mr-4 hover:text-orange-600 rounded-full"
            onClick={toggleModal}
          >
            <i class="ri-close-line"></i>
          </button>
        </div>
        <div class="flex flex-col xl:flex-row px-4 pb-4">
          <div>
            <div class="flex gap-2">
              <div>
                <img
                  class="w-12 h-12 rounded-full"
                  src={project?.creator.ppImage}
                  alt=""
                  srcset=""
                />
              </div>
              <div class="flex flex-col font-medium">
                <span class="opacity-60">Creador</span>
                <span>{project?.creator.name}</span>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="font-bold text-3xl ">{project?.title}</h4>
              <p class="opacity-80 max-w-sm">{project?.description}</p>
            </div>
            <div class="pr-4 ml-4 mt-8 max-w-sm">
              <h4 class="font-bold text-xl">Tecnologias</h4>
              <p class="opacity-70">{project?.modal.aboutTech}</p>
              <div class="flex items-center gap-2 max-h-12 mt-6 p-2">
                {project?.modal.recapTech.map((index, key) => (
                  <img class="h-fit" width={24} src={asset(`/images/logos/${index}.png`)} key={key} />
                ))}
              </div>
            </div>
          </div>
          <div class="max-w-md p-4">
            <div>
              <img
                class="rounded-xl"
                src={project?.img}
                alt="Imagen principal del proyecto"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 xl:flex-row xl:gap-0 xl:justify-around w-full xl:max-h-48 px-4 py-12 mt-4">
          {project?.modal.recapImgs.map((index, key) => (
            <img class="w-52 h-auto rounded-lg" src={index} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
