interface Props {
  name: string;
  placeholder: string;
  label: string;
  extraStyle?: string;
}

const inputStyle =
  "border border-stone-300 p-2 rounded-lg transition outline-stone-100 duration-200 focus:ring-2 focus:ring-stone-200 mt-2";

export default function InputForm(props: Props) {
  return (
    <div class="flex flex-col w-full">
      <label class="font-medium" htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        class={inputStyle + props.extraStyle}
        placeholder={props.placeholder}
      />
    </div>
  );
}
