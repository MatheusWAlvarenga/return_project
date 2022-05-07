import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className=" flex justify-center items-center bg-brand dark:brand rounded-full focus:outline-none focus:ring-brand focus:ring-offset-2 px-3 h-12 text-surface-primary group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="w-0 overflow-hidden group-hover:w-max group-hover:ml-2 transition-all duration-500 ease-linear">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
