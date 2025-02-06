import { useState } from "react";

const SignupForm = ({ users, setUsers }) => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    mobile: "",
    password: "",
    email: "",
  });
  const { address, email, mobile, name, password } = user;

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    // 객체 []는 객체 안의 값을 접근하는 방법. user['name'] = user.name
  };
  const onSubmit = () => {
    if (setUser === user) {
      return alert("추가하시겠습니까");
    }
    console.log(props);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input type="text" value={email} onChange={onChange} name="email" />
      <input
        type="password"
        value={password}
        onChange={onChange}
        name="password"
      />
      <input type="text" value={mobile} onChange={onChange} name="mobile" />
      <input type="text" value={name} onChange={onChange} name="name" />
      <input type="text" value={address} onChange={onChange} name="address" />

      <button></button>
    </form>
  );
};

export default SignupForm;
