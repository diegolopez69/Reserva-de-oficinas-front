import { useReducer } from "react";

const PREVIOUS = "PREVIOUS";
const NEXT = "NEXT";
const ENTER_LEFT_TO_RIGHT = "animate__fadeInLeft";
const ENTER_RIGHT_TO_LEFT = "animate__fadeInRight";
const FADE_IN = "animate__fadeIn";

export const useSlider = (items) => {
  const getPrevious = (current) =>
    current - 1 >= 0 ? current - 1 : items.length - 1;

  const getNext = (current) => (current + 1) % items.length;

  const reducer = (state, { type }) => {
    switch (type) {
      case PREVIOUS: {
        const current = state.previous;
        return {
          current,
          previous: getPrevious(current),
          next: getNext(current),
          animation: ENTER_LEFT_TO_RIGHT,
        };
      }
      case NEXT: {
        const current = state.next;
        return {
          current,
          previous: getPrevious(current),
          next: getNext(current),
          animation: ENTER_RIGHT_TO_LEFT,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    previous: items.length - 1,
    current: 0,
    next: 1,
    animateIndex: 0,
    animation: FADE_IN,
  });

  const goBack = () => dispatch({ type: PREVIOUS });

  const goNext = () => dispatch({ type: NEXT });

  return { ...state, goBack, goNext };
};
