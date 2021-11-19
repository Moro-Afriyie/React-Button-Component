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
        <div className="button__variant">
          <p className="title">
            &#60;Button variant= <q>outline</q> /&#62;
          </p>
          <Button variant="outline" />
        </div>
        <div className="button__variant">
          <p className="title">
            &#60;Button variant= <q>text</q> /&#62;
          </p>
          <Button variant="text" />
        </div>
        <div className="button__variant">
          <p className="title">&#60;Button disableShadow /&#62;</p>
          <Button disableShadow />
        </div>
        <div className="button__variant">
          <p className="title">&#60;Button disabled/&#62;</p>
          <Button disabled />
        </div>
      </div>
    </main>
  );
}

export default App;
