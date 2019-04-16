import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Title text="Hello CodeSandBox" />
      <SubTitle text="Start editing to see some magic happen!" />
    </div>
  );
}

const Title = props => {
  const upperCaseText = props.text.toUpperCase();
  return <h1>{upperCaseText}</h1>;
};

const SubTitle = props => {
  const upperCaseText = props.text.toUpperCase();
  return <h2>{upperCaseText}</h2>;
};

//write an HOC that turns a components prop to all caps
const Caps = Component => props => {
  const upperCaseText = props.text.toUpperCase();
  return <Component />;
};

const AngryTitle = Caps(Title);

const AngrySubtitle = Caps(SubTitle);

Caps(Title); // ==> ?? an anonymous functional comp

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
