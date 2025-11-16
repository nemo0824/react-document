import MyReact from "./lib/MyReact";

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

export default NameField;
