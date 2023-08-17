import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "@/store/counter";
import styled from "./index.module.scss";

export function CounterPage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styled.container}>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment 10
        </button>
      </div>
    </div>
  );
}
