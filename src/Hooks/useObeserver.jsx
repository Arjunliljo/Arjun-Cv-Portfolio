import { useDispatch } from "react-redux";

export function useObserver(currFunction, firstArg, secArg) {
  const reduxDispatch = useDispatch();

  function callBack(entries, observer) {
    const [intersect] = entries;
    if (intersect.isIntersecting) {
      reduxDispatch(currFunction(firstArg));
    } else {
      reduxDispatch(currFunction(secArg));
    }
  }

  return [callBack];
}
