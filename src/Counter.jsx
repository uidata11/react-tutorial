const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        ADD 1
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Minus 1
      </button>
      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
};

export default Counter;
