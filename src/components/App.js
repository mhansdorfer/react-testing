import React from "react";
import Counter from "./Counter.js";

export default function App() {
  return (
    <div>
      <Counter start={10}/>
    </div>
  );
  // return (
  //   <div>
  //     <Counter start={10}/>
  //     <Counter id="noprops"/>
  //   </div>
  // );
}