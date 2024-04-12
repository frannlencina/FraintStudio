import ProjectData from "../utils/ProjectsData.json" with { type: "json" };

interface Props {
  toggleModal: () => void;
  selectedProject: number;
}

export default function ProjectModal({ toggleModal, selectedProject }: Props) {
  const project = ProjectData.find((project) => project.id === selectedProject);

  return (
    <div class="flex justify-center items-center my-auto fixed z-50 bg-black bg-opacity-80 w-full h-screen top-0 left-0">
      <div class="bg-white flex flex-col p-6 max-w-[80%] md:max-w-[65%] max-h-[90%] xl:max-h-[80%] rounded-xl overflow-y-scroll xl:overflow-hidden">
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
              <div class="flex gap-2 max-h-12 mt-6">
                {/* Mostrar cantidad Logo de tecnologias */}
                <img
                  class="w-6 h-6"
                  src="https://res.cloudinary.com/dctldwa03/image/upload/v1697775481/tslogo_akmllv.png"
                  alt=""
                />
                <img
                  class="w-6 h-6"
                  src="https://res.cloudinary.com/dctldwa03/image/upload/v1709776070/NextJS_d2gsj2.png"
                  alt=""
                />
                <img
                  class="w-6 h-6"
                  src="https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png"
                  alt=""
                />
                <img
                  class="w-6 h-6"
                  src="https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/javascript-logo_drsvuc.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="max-w-md p-4">
            {/* Foto principal del Proyecto */}
            <div>
              <img
                class="rounded-xl"
                src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 xl:flex-row xl:gap-0 xl:justify-around w-full xl:max-h-48 px-4 py-12 mt-4">
          {/* Mostrar 3 Fotos del Proyecto */}
          {
            project?.modal.recapImgs.map( (index, key ) => (
             
                <img class="w-52 h-auto rounded-lg" src={index} key={key} />
             
            ) )
          }
          {/* <img
            class="w-52 h-auto rounded-lg"
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt=""
          />
          <img
            class="w-52 h-auto rounded-lg"
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt=""
          />
          <img
            class="w-52 h-auto rounded-lg"
            src="https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}
