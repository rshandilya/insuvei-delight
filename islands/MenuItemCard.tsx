import { JSX } from "preact";
import { useSignal } from "@preact/signals";
//import { Button } from "../components/Button.tsx";

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description: string;
}

export default function MenuItemCard(props: CardProps) {
  const { imageSrc, title, description, ...rest } = props;
  const count = useSignal(0);

  return (
    <div
      {...rest}
      class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white h-full"
    >
      <img src={imageSrc} alt={title} class="w-full h-48 object-cover" />
      <div class="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p class="text-gray-500 text-base">{description}</p>
        </div>
        <div class="mt-4 flex text-red-500  justify-end">
          {count.value === 0 ? (
            <button type="button" 
            class="px-2 py-1 border-red-500 border-2 rounded bg-white hover:bg-red-200 transition-colors" 
            onClick={() => (count.value = 1)}>Add</button>
          ) : (
            <div class="flex items-center gap-2">
              <button type="button" class="text-red-500" onClick={() => count.value--}>-</button>
              <span class="text-lg tabular-nums w-8 text-center">
                {count.value}
              </span>
              <button type="button" class="text-red-500" onClick={() => count.value++}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}