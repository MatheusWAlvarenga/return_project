import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton({
  screenshot,
  onScreenShotTook,
}: ScreenShotButtonProps) {
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);
  async function handleTakeScreenShot() {
    setIsTakingScreenShot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const imageBase64 = canvas.toDataURL("image/png");
    onScreenShotTook(imageBase64);
    setIsTakingScreenShot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-tooltip-dark dark:text-tooltip hover:text-surface-hover-dark transition"
        onClick={() => onScreenShotTook(null)}
        style={{
          backgroundImage: `url(${screenshot}) `,
          backgroundSize: 180,
          backgroundPosition: "right bottom",
        }}
      >
        <Trash weight="fill" className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenShot}
      className="p-2 text-tooltip-dark dark:text-tooltip hover:text-surface-hover-dark bg-surface-secondary hover:bg-surface-hover dark:bg-surface-secondary-dark rounded-md border border-transparent transition  focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-surface-primary-dark ring-offset-surface-primary focus:ring-brand"
    >
      {isTakingScreenShot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 opacity-80" />
      )}
    </button>
  );
}
