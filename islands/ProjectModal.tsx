import ProjectData from "../utils/ProjectsData.json" with { type: "json" };

interface Props {
    toggleModal: () => void,
    selectedProject: number;
}

export default function ProjectModal({ toggleModal, selectedProject }: Props) {

  const project = ProjectData.find((project) => project.id === selectedProject);

  return (
    <div class="flex justify-center items-center my-auto fixed z-50 bg-black bg-opacity-80 w-full h-screen top-0 left-0">
      <div class="bg-white p-6 max-w-[80%] md:max-w-[65%] max-h-[50%] rounded-xl">
        <button class="relative font-medium text-lg float-right mr-4" onClick={toggleModal}>x</button>
        <h4 class="font-bold text-xl "> {project?.title} </h4>
      </div>
    </div>
  );
}
