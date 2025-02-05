import { useEffect, useState } from "react";

const [code, setCode] = useState("");

const verificationCode = "123123";

const onCheck = () => {
  if (code.length === 6 && code === verificationCode) {
    return alert("일치합니다. ");
  }
};

useEffect(() => {
  setCode.length === 6 && onCheck;
});

const Code = () => {
  return (
    <div>
      <h1>Code</h1>
      <input type="text" value={code} onChange={setCode} />
      <button onClick={onCheck}></button>
    </div>
  );
};

export default Code;
