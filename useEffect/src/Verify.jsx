import { useEffect, useState } from "react";

const Verify = () => {
  const [mobile, setMobile] = useState("010");
  const [verificationCode, setVerificationCode] = useState(null);
  const [code, setCode] = useState("");
  const [time, setTime] = useState(60);

  const onSend = () => {
    if (mobile.length !== 11) {
      return alert("연락처를 입력해주세요.");
    }
    let number = 0;
    while (number.toString().length <= 5) {
      number = Math.floor(Math.random() * 1000000);
    }
    setVerificationCode(number.toString);
  };

  const onVerify = () => {
    if (code.length !== 6) {
      return alert("6자리입니다.");
    }
    if (verificationCode && verificationCode !== code) {
      return alert("틀립니다.");
    }
  };

  useEffect(() => {});

  useEffect(() => {
    console.log("ready");
  }, []);

  useEffect(() => {
    console.log(mobile, verificationCode, code, time);
  }, [mobile, verificationCode, code, time]);

  return (
    <div>
      <h1>본인인증</h1>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            onSend();
          }}
        >
          <input
            type="text"
            value={verificationCode ? code : mobile}
            onChange={(e) =>
              verificationCode ? setCode : setMobile(e.target.value)
            }
            placeholder={verificationCode ? "인증번호 입력" : "010--------"}
          />
          <button>{verificationCode ? "인증하기" : "인증번호 전송"}</button>
        </form>
      </div>
    </div>
  );
};

export default Verify;

const getTime = (time) => {
  const min = Math.floor(time / 60);

  const sec = time - min * 60;

  return `${min}:${sec.toString().length === 1 ? `0${sec}` : sec}`;
};
