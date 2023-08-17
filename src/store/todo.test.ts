import todoSlice, { TodoState, addTodo, removeTodo, toggleTodo } from "./todo";

describe("todoSlice", () => {
  let initialState: { todoList: TodoState[] };

  beforeEach(() => {
    initialState = { todoList: [] };
  });

  it("should handle initial state", () => {
    expect(todoSlice.reducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle addTodo", () => {
    const actual = todoSlice.reducer(initialState, addTodo("Test Todo"));
    expect(actual.todoList.length).toEqual(1);
    expect(actual.todoList[0].title).toEqual("Test Todo");
    expect(actual.todoList[0].isDone).toEqual(false);
  });

  it("should handle removeTodo", () => {
    const todo1 = { id: 1, title: "Test Todo 1", isDone: false };
    const todo2 = { id: 2, title: "Test Todo 2", isDone: false };
    const todo3 = { id: 3, title: "Test Todo 3", isDone: false };
    const state = { todoList: [todo1, todo2, todo3] };
    const actual = todoSlice.reducer(state, removeTodo(2));
    expect(actual.todoList.length).toEqual(2);
    expect(actual.todoList).toContain(todo1);
    expect(actual.todoList).toContain(todo3);
    expect(actual.todoList).not.toContain(todo2);
  });

  it("should handle toggleTodo", () => {
    const todo1 = { id: 1, title: "Test Todo 1", isDone: false };
    const todo2 = { id: 2, title: "Test Todo 2", isDone: false };
    const todo3 = { id: 3, title: "Test Todo 3", isDone: false };
    const state = { todoList: [todo1, todo2, todo3] };
    const actual = todoSlice.reducer(state, toggleTodo(2));
    expect(actual.todoList.length).toEqual(3);
    expect(actual.todoList[1].isDone).toEqual(true);
    expect(actual.todoList[0]).toEqual(todo1);
    expect(actual.todoList[2]).toEqual(todo3);
  });
});
