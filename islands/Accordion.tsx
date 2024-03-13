import { useState } from "preact/hooks";

interface Props {
  question: string;
  answer: string;
}

export default function Accordion(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  

   const toggleOpen = () => {
    setIsOpen(!isOpen)
   }

  return (
    <div class="px-4 py-2 border border-stone-200 cursor-pointer max-w-xs rounded-lg bg-white" onClick={toggleOpen}>
      <div class="flex justify-between items-center text-lg font-regular"><p>{props.question} </p><i class="ri-arrow-down-s-line"></i></div>
      {isOpen
        ? (
          <div class="opacity-75 mt-4">
            {props.answer}
          </div>
        )
        : ""}
    </div>
  );
}
