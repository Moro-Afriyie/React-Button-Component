import React from "react";
import "./App.scss";
import Button from "./button/Button";

function App() {
  return (
    <main className="container">
      <div className="buttons__container">
        <div className="button__default">
          <p className="title">&#60;Button /&#62;</p>
          <Button />
        </div>
      </div>
    </main>
  );
}

export default App;
