import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0); //defined state varible first , count is name of state variable , setCount is a method help u to update the state variable, then "=" state " useState(0)" - 0 is the initial value of the state variable. it will get imported in react aswell/
  return (
    <>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Count:{count} {/*to displayon screen */}
      </button>
      {/* Have to use onclick event handler to update the state variable */}
      <input type="text" />
      <h3>count is {count}</h3>
    </>
  );
}
export default Button;
