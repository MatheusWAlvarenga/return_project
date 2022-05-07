import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 text-primary dark:text-primary-dark text">
          Deixe o seu feedback
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
              className="flex flex-col bg-surface-secondary dark:bg-surface-secondary-dark items-center justify-center w-24 flex-1 h-full rounded-lg py-5 border-2 border-transparent hover:border-brand  focus:border-brand focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span className="text-secondary dark:text-secondary-dark">
                {value.title}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
