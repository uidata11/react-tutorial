import { useState, useEffect, useRef } from "react";

const initialState = [];

const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <h1>Todo</h1>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>btn</button>
      </form>
    </div>
  );
};

export default Todo;
