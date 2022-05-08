import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedbackContentStepProps {
  onFeedbackSent: () => void;
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
}

export function FeedbackContentStep({
  onFeedbackSent,
  feedbackType,
  onFeedbackRestart,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendFeedback, setIsSendFeedback] = useState(false);

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendFeedback(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendFeedback(false);

    onFeedbackSent();
  }

  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header>
        <button
          className="top-5 left-5 absolute text-primary dark:text-primary-dark  hover:text-secondary"
          type="button"
          onClick={onFeedbackRestart}
        >
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>
        <span className="flex justify-center items-center  gap-2 text-xl leading-6 text-primary dark:text-primary-dark text">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm text-secondary dark:text-secondary-dark placeholder-stroke dark:placeholder-stroke-dark p-4  border border-stroke-dark focus:border-none bg-transparent rounded-md focus:ring-brand focus:ring-1 focus:outline-none resize-none  scrollbar-thumb-surface-hover-dark scrollbar-track-transparent scrollbar-thin"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo... "
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            screenshot={screenshot}
            onScreenShotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0 || isSendFeedback}
            className="transition focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-surface-primary-dark ring-offset-surface-primary focus:ring-brand p-2 bg-brand hover:bg-brand-hover rounded-s2 border border-transparent text-primary-dark font-bold  px-4 flex-1 flex justify-center items-center text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand"
          >
            {isSendFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
