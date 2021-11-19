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
        <div className="button__disabled">
          <p className="title">&#60;Button disabled /&#62;</p>
          <Button disabled />
          <p className="title">
            &#60;Button variant=<q>text</q> disabled /&#62;
          </p>
          <Button variant="text" disabled />
        </div>
        <div className="button__startIcon">
          <div className="right">
            <p className="title">
              &#60;Button startIcon=<q>local_grocery_store</q> /&#62;
            </p>
            <Button startIcon="local_grocery_store" />
          </div>
          <div className="left">
            <p className="title">
              &#60;Button endIcon=<q>local_grocery_store</q> /&#62;
            </p>
            <Button endIcon="local_grocery_store" />
          </div>
        </div>
        <div className="button__size">
          <div className="small">
            <p className="title">
              &#60;Button size=<q>sm</q> /&#62;
            </p>
            <Button size="sm" />
          </div>
          <div className="medium">
            <p className="title">
              &#60;Button size=<q>md</q> /&#62;
            </p>
            <Button size="md" />
          </div>
          <div className="large">
            <p className="title">
              &#60;Button size=<q>lg</q> /&#62;
            </p>
            <Button size="lg" />
          </div>
        </div>
        <div className="button__colors">
          <div className="color__default">
            <p className="title">
              &#60;Button color=<q>default</q> /&#62;
            </p>
            <Button color="default" />
          </div>
          <div className="color__primary">
            <p className="title">
              &#60;Button color=<q>primary</q> /&#62;
            </p>
            <Button color="primary" />
          </div>
          <div className="color__secondary">
            <p className="title">
              &#60;Button color=<q>secondary</q> /&#62;
            </p>
            <Button color="secondary" />
          </div>
          <div className="color__danger">
            <p className="title">
              &#60;Button color=<q>danger</q> /&#62;
            </p>
            <Button color="danger" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
