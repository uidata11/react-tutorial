import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Object from "./Object.jsx";
import Todo from "./todo/Todo";
import STodo from "./todo/STodo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Object /> */}
    <Todo />
    {/* <STodo /> */}
  </StrictMode>
);
