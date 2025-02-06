import { useEffect, useState } from "react";

const Code = () => {
  const [code, setCode] = useState("");

  const verificationCode = "123123";

  const onCheck = () => {
    if (code.length === 6 && code === verificationCode) {
      return alert("일치합니다. ");
    }
    alert("번호를 확인해주세요. ");
  };

  return (
    <div>
      <h1>Code</h1>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={onCheck}></button>
    </div>
  );
};

export default Code;
