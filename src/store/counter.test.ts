import counterSlice, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
} from "./counter";

describe("counterSlice", () => {
  let initialState: CounterState;

  beforeEach(() => {
    initialState = { value: 0 };
  });

  it("should handle initial state", () => {
    expect(counterSlice.reducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle increment", () => {
    const actual = counterSlice.reducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });

  it("should handle decrement", () => {
    const actual = counterSlice.reducer(initialState, decrement());
    expect(actual.value).toEqual(-1);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterSlice.reducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(2);
  });
});
