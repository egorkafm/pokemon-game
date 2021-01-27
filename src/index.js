import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeaderBlock from "./components/HeaderBlock";

const AppList = () => {
  const items = ["items 1", "items 2", "items 3", "items 4"];
  const firstItems = <li>Ites 0</li>;
  return (
    <ul>
      {firstItems}
      {items.join(", ")}
      {items.map((item) => (
        <li>{item}</li>
      ))}
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1 className="header">Hello World!</h1>;
};

const AppInput = () => {
  const placeholder = "Type text...";
  return (
    <label>
      <input placeholder={placeholder} />
    </label>
  );
};



ReactDOM.render(
  <App />,

  document.getElementById("root")
);
