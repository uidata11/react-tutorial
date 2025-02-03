import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const name = "KCH";

  const email = "chan7pp@google.com";

  const githubUrl = "https://github.com/uidata11/react-tutorial/tree/intro";

  const mobile = "010 1234 1234 ";

  const intro = "^^";

  const fn = (text) => console.log(text);

  return (
    <>
      <Header name={"Hello World"} />
      <main>
        <h1>간단한 인삿말</h1>
        <p>
          안녕하세요. 저는 {name}입니다. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat fugiat quisquam voluptas nihil aliquid,
          aspernatur officia saepe, sapiente molestiae facilis voluptates rerum
          mollitia? Corporis eos, maxime neque esse perspiciatis porro?
        </p>
        <br />
        <p>연락쳐는 {mobile}입니다.</p>
        <br />
        <p>이메일은 {email}입니다.</p>
      </main>
      <Footer intro={intro} />
    </>
  );
};
export default App;
