import { decrement, increment, incrementByAmount } from "@/store/counter";
import useAppDispatch from "@/utiils/hooks/useAppDispatch";
import useAppSelector from "@/utiils/hooks/useAppSelector";
import styled from "./index.module.scss";

export function CounterPage() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styled.container}>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment 10
        </button>
      </div>
    </div>
  );
}
