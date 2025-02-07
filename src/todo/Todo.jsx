import { useState, useEffect, useRef } from "react";
import { fetchList, store } from "../database";

const database = localStorage;

const store = (item) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item.length === 0) {
        return reject("입력해주세요.");
      }
      const data = database.getItem("list");
      if (!data || data.lenght === 0) {
        return reject("");
      }
      resolve("성공");
    }, 500);
  });

const initialState = JSON.parse(database.getItem("list")) ?? [];

const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  const [todo, setTodo] = useState([]);

  const ref = useRef(null);

  const onSubmit = () => {
    if (todo.length === 0) {
      alert("적어주세요.");
      return ref.current?.focus();
    }
    if (todo.length <= 1) {
      alert("짧아요.");
      return ref.current?.focus();
    }
    // setTodos((prev) => {
    //   return prev + 1;
    // });
    setTodos((prev) => [todo, ...prev]);
    setTodo("");
    ref.current?.focus();
    // set함수는 무조건 초기값과 같은 타입을 return.
  };

  store(food).catch((error) => {
    alert(error).then((response) => {});
  });

  useEffect(() => {
    const fetchList = () => {
      const data = database.getItem("list");
      if (!data || data.length === 0) {
        return;
      }
      const realData = JSON.parse(data);
      console.log(realData);
      setList(realData);
    };
    fetchList();
    return (
      () => {
        fetchList();
      },
      []
    );
  }, []);

  useEffect(() => {
    // console.log({ todo });
    todos.map((todo, index) => {
      console.log(index, todo);
    });
  }, [todo]);

  return (
    <div>
      <h1>Todo</h1>
      <form
        style={{
          padding: 30,
          backgroundColor: "gainsboro",
        }}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>btn</button>
      </form>
      {/* {todos.length} */}
      <ul>
        {todos.map((todo, index) => {
          const onDelete = () =>
            // setTodos((prev) => {
            //   let copy = [...prev];
            //   copy.splice(index, 1);
            //   return copy;
            // });
            setTodos((prev) => prev.filter((asd) => asd !== todo));
          return (
            <li key={todo}>
              {todo}
              <button onClick={onDelete}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
