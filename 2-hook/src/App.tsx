import MyReact from "./lib/MyReact";

// const App = () => <>2-hook</>;

function NameField() {
  const [firstName, setFirstName] = MyReact.useName("사용자1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  return <input value={firstName} onChange={handleChange} />;
}

export default NameField;
