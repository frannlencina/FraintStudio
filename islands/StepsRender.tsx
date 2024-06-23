import StepsData from "../utils/StepsData.json" with { type: "json" };

export default function StepsRender() {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 p-4 md:grid-cols-5 gap-4 max-w-[1400px] mx-auto py-48 text-black">
      {StepsData.map((steps, key) => (
        <div class="p-4 border rounded-xl cursor-default" key={key}>
          <span class="font-bold text-lg">{steps.id}</span>
          <h2 class="font-regular text-lg" >{steps.title}</h2>
          <p class="opacity-80 text-sm">{steps.description}</p>
        </div>
      ))}
    </div>
  );
}
