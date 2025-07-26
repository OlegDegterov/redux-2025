import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  selectCounter,
  useAppSelector,
  type AppState,
  type CounterId,
  type DecrementAction,
  type IncrementAction,
} from "./store";
import { useEffect, useReducer, useRef } from "react";
import { useDispatch } from "react-redux";

export function Counters() {
  return (
    <div className="wrapper">
      <Counter counterId="first" />
      <Counter counterId="second" />
      <Counter counterId="third" />
    </div>
  );
}
function Counter({ counterId }: { counterId: CounterId }) {
  const dispatch = useDispatch();
  const counterState = useAppSelector((state) =>
    selectCounter(state, counterId)
  );
  // const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // const lastStateRef = useRef<ReturnType<typeof selectCounter>>(undefined);

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     const currentState = selectCounter(store.getState(), counterId);
  //     const lastState = lastStateRef.current;

  //     if (currentState !== lastState) {
  //       forceUpdate();
  //     }
  //     lastStateRef.current = currentState;
  //   });

  //   return unsubscribe;
  // }, []);

  // const counterState = selectCounter(store.getState(), counterId);
  console.log("counterId", counterId);
  return (
    <div className="card">
      <p>{counterId}</p>
      <p>{counterState?.counter}</p>

      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: {
              counterId,
            },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: {
              counterId,
            },
          } satisfies DecrementAction)
        }
      >
        decrement
      </button>
    </div>
  );
}
