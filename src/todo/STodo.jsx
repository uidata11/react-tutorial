import { useState, useRef } from "react";

const initialList = ["우유", "양파"];

const STodo = () => {
  const [list, setList] = useState(initialList);

  const ref = useRef(null);

  const onSubmit = () => {
    if (todo.length === 0) {
      alert(" 할일을 적으세요.");
      return;
    }
  };

  const onDelete = () => {};
  return (
    <div>
      <h1>STodo</h1>
      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
      />
      <ul>
        {list.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default STodo;
