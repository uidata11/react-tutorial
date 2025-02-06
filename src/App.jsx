import { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const valueRef = useRef(0);

  const valueCheck = () => {
    if (value.length === 0) {
      alert("입력하세요.");
      ReferenceError.current?.focus();
      const input = document.querySelector("input#myInput");
      input.focus();
      return;
    }
    alert(`"you just typed:" ${value}`);
    const length = value.length;
    valueRef.current = length;
  };

  useEffect(() => {
    console.log({ value });
  }, [value]);

  useRef(useRef(useRef()));

  return (
    <div>
      <h1>React Tutorial: {valueRef.current}</h1>
      <input
        type="text "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select name="" id="">
        a
      </select>
      <select name="" id="">
        b
      </select>
      <button onClick={valueCheck}>value check</button>
    </div>
  );
};
export default App;
