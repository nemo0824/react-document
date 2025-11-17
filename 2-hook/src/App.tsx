import { useState } from "react";
import MyReact from "./lib/MyReact";
import { Context } from "./components/Context";

// const App = () => <>2-hook</>;

function NameField() {
  const [firstName, setFirstName] = MyReact.useState("사용자1");
  const [lastName, setLastName] = MyReact.useState("김");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  return;
  <>
    <input value={firstName} onChange={handleChange} />
    <input value={lastName} onChange={handleChange}></input>
  </>;
}

function Counter() {
  MyReact.resetCursor();
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState(localStorage.getItem("name") || "");

  MyReact.useEffect(() => {
    document.title = `count:${counter} name:${name}`;
    console.log("useEffect1 실행됨");

    return function cleanUp() {
      document.title = "";

      console.log("effect1 cleanup");
    };
  }, [counter, name]);

  MyReact.useEffect(() => {
    localStorage.setItem("name", name);
    console.log("useEffect2 실행");
  }, [name]);

  console.log("counter 컴포넌트 렌더링 ");

  return (
    <>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        더하기 +
      </button>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </>
  );
}

export default function App() {
  // const [mounted, setMounted] = useState(false);

  // const handleToggle = () => {
  //   const nextMounted = !mounted;
  //   if (!nextMounted) {
  //     MyReact.cleanUpEffects();
  //   }
  //   setMounted(nextMounted);
  // };

  // return (
  //   <>
  //     <button onClick={handleToggle}>컴포넌트 토글</button>
  //     {mounted && <Counter />}
  //   </>
  // );
  return <Context />;
}
