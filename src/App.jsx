import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="bule">元気ですかね？</ColofulMessage>
      <ColofulMessage color="pink">元気です</ColofulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
