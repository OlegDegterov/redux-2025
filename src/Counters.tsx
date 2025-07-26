import "./App.css";
import {
  selectCounter,
  useAppSelector,
  type CounterId,
  type DecrementAction,
  type IncrementAction,
} from "./store";
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
