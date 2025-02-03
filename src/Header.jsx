import { useState } from "react";

const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}의 소개 페이지</h1>
    </header>
  );
};

export default Header;
