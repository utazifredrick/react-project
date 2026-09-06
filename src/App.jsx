import { ProductList } from "./ProductList";
import { CardWrapper } from "./CardWrapper";
import { Greeting } from "./Greeting";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { CustomButton } from "./CustomButton";
import "./App.css";

function App() {
  return (
    <>
      <CustomButton text="Like" />
      <CustomButton text="love" />
      <Alert>your work as been saved!</Alert>
      <Alert type="error">something went wrong!</Alert>
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
