import { ProductList } from "./ProductList";
import { CardWrapper } from "./CardWrapper";
import { Greeting } from "./Greeting";
import { NameList } from "./NameList";
import "./App.css";

function App() {
  return (
    <>
      <NameList />
      <ProductList />
      <CardWrapper title="User Profile">
        <p>Bruce Zan</p>
        <p>bruce@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <Greeting name="Fredrick" message="Good day" />
      <Greeting name="John" />
      <Greeting message="Good morning" />
      <Greeting />
    </>
  );
}

export default App;
