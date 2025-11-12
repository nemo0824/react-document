class Contract {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sign() {
    const capturedName = this.name;
    setTimeout(() => console.log("서명인", capturedName), 3000);
  }
}

function createContact(name: string) {
  const sign = () => {
    setTimeout(() => console.log("서명인", name), 3000);
  };
  return { sign };
}
const contrack = new Contract("사용자 1");
contrack.sign();
contrack.name = "사용자 2";

const contract = createContact("사용자 3");
console.log(contract, "contrack?");
contract.sign();

const App = () => <>2-hook</>;

export default App;
