// your code is going to go here, for now
import React from "react";
import { render } from "react-dom";
import SearchParamas from "./SearchParamas";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParamas></SearchParamas>
    </div>
  );
};

render(<App />, document.getElementById("root"));
