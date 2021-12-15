import { useState } from "react";

export const useSteper = (steps = [], initialStep = 0) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const ADVANCE = +1;
  const BACK = -1;

  const goTo = (factor) => setCurrentStep((prevStep) => prevStep + factor);

  const isMoveAllowed = (direction) =>
    direction === ADVANCE ? currentStep < steps.length - 1 : currentStep !== 0;

  const goNext = () => isMoveAllowed(ADVANCE) && goTo(ADVANCE);

  const goBack = () => isMoveAllowed(BACK) && goTo(BACK);

  return { currentStep, goBack, goNext };
};
