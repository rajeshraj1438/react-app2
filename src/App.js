import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
    </div>
  );
}

function FifthComponent() {
  const [counter] = useState(100);
  const [username] = useState("Rajesh");

  const updateUsername = () => {};
  const updateCounter = () => {};
  return (
    <div>
      <h1>Fifth Component</h1>
      <div>Counter {counter} </div>
      <div>Username {username} </div>
    </div>
  );
}

function FourthComponent() {
  let localCounter = 100;
  let [counter, setCounter] = useState(100);

  const updateCounter = () => {
    localCounter = localCounter + 1;
    setCounter = setCounter + 1;
    console.log("Counter Operation", localCounter, counter);
  };
  return (
    <div>
      <h1>Fourth Component</h1>
      <input type="button" value="Update Counter" onClick={updateCounter} />
      <input type="button" value="Update Counter1" onClick={updateCounter()} />
      <div>React Not Aware - {localCounter} </div>
      <div>React Aware - {counter} </div>
    </div>
  );
}

function ThirdComponent() {
  const localCounter = 100;

  const [counter] = useState(100);
  return (
    <div>
      <h1>Third Component</h1>
      <div>React Not aware - {localCounter} </div>
      <div>React aware - {counter}</div>
    </div>
  );
}

const SecondComponent = () => {
  return (
    <div>
      <h3>SecondComponent</h3>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        temporibus vero porro. Impedit voluptatibus necessitatibus quos,
        provident voluptas assumenda qui.
      </div>
    </div>
  );
};

const MyComponent = () => {
  return (
    <div>
      <div>Hello Universe</div>
    </div>
  );
};
