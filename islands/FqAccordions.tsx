import FqData from "../utils/FqData.json" with { type: "json" };
import Accordion from "./Accordion.tsx";

export default function FqAccordions() {
  return (
    <>
      {FqData.map((data, index) => (
        <div key={index}>
          <Accordion question={data.question} answer={data.answer} />
        </div>
      ))}
    </>
  );
}
