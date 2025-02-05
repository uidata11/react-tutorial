import { useEffect, useState } from "react";

const App = () => {
  const [last, setLast] = useState("");
  const [name, setName] = useState("");

  const [counting, setCounting] = useState(false);
  const [sec, setSec] = useState(0);
  const [interval, setInterval] = useState(0);

  const onPlus = () => {
    setSec((prev) => prev + 1000);
  };
  const onMious = () => {
    setSec((prev) => prev - 1000);
  };
  const onReset = () => {
    setSec(0);
  };

  useEffect(() => {
    console.log(sec);
  }, [sec]);

  useEffect(() => {
    console.log({ counting });
  }, [counting]);

  useEffect(() => {
    console.log(last, name);
  }, []);
  // [] (빈배열): 해당 컴포넌트가 렌더링 되는 최초 1회만 실행할께요. (dependency)

  useEffect(() => {
    console.log("App has mounted");
  }, []);

  useEffect(() => {
    console.log("App has rendered");
  });
  // 배열을 사용하지 않으면 모든것에 반응하는 코드가 됩니다. (useEffect 사용할때 거의 필수이다.~)

  // 배열에 우리가 주시하고 싶은 변수/함수를 넣어두면 해당 변수/함수가 업데이트 될 때만 작동하는 코드를 짤 수 있습니다.
  return (
    <div
      style={{
        marginLeft: 300,
        padding: 30,
        backgroundColor: "whitesmoke",
        borderRadius: 30,
      }}
    >
      <input
        type="text"
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>{sec / 1000}초</h3>
      <button onClick={onPlus}>+</button>
      <button onClick={onMious}>-</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={setCounting}>{counting ? "stop" : "start"}</button>
    </div>
  );
};

export default App;
