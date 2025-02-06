import { useState } from "react";
import SignupForm from "./SignupForm";

const Object = () => {
  ["딸기", "포도", "사과"];

  const [names, setNames] = useState(["aaa", "bbb"]);
  const onCh = (e) => {
    console.log(e);
  };

  const a = {};
  const b = [];
  console.log(typeof a, typeof b);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [signinProps, setSigninProps] = useState({ email: "", password: "" });
  const onChange = (e) => {
    console.log(e.target.value, e.target.name);
    const { value, name } = e.target;
    setSigninProps((prev) => ({ ...prev, [name]: value }));
  };
  const [array, setArray] = useState(["누구", "누구", "누구", "누구"]);
  const onSubmit = () => {
    console.log(Array, signinProps.name);
    if (signinProps.name.length === 0) {
      return alert("입력해주세요.");
    }
    setArray([setSigninProps.name]);
    console.log(array, signinProps.name);
  };

  const onDelete = () => {
    //   const name  =signinProps.name
    const { name } = signinProps;
    if (name.length === 0) {
      return alert("입력하세요");
    }
    const index = array.findIndex((person) => person === name);
    if (index < 0) {
      return;
    }
    setArray((prev) => prev.filter());
  };

  const [users, setUsers] = useState([
    {
      name: "tjwnstjd",
      address: "daejeon",
      mobile: "0108798123",
      password: "123123",
      email: "sjs@dw.com",
    },
    {
      name: "diddudxkr",
      address: "daejeon",
      mobile: "0108798123",
      password: "123123",
      email: "yyt@dw.com",
    },
  ]);
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input type="text" value={setNames} />
      <button onChange={onCh}>upload</button>
      {names.map((item, idx) => {
        return <p key={idx}>{item}</p>;
      })}
      <h1>Object</h1>
      <input
        type="text"
        value={signinProps.email}
        // onChange={(e) => {
        //   setSigninProps((prev) => ({ ...prev, email: e.target.value }));
        // }}
        onChange={onChange}
      />
      <input
        type="password"
        value={signinProps.password}
        // onChange={(e) => {
        //   setSigninProps((prev) => ({ ...prev, password: e.target.value }));
        // }}
        onChange={onChange}
      />
      <input
        type="text"
        value={signinProps.name}
        onChange={onChange}
        name="name"
      />
      <button onClick={onSubmit}>ADD</button>
      <SignupForm users={users} setUsers={setUsers} />
    </div>
  );
};

export default Object;
