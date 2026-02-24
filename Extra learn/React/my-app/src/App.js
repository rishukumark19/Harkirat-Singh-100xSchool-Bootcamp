import logo from "./logo.svg";
import "./App.css";
import Button from "./component/Button";
import User from "./component/User";
import Apirequest from "./component/APIrequest";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button />
      <User username="Kasturi" />
      <Apirequest />
    </div>
  );
}

export default App;
