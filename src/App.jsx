import { UserForm } from "./UserForm";
import { UserProfile } from "./UserProfile";
import { Product } from "./Product";
import "./App.css";

function App() {
  return (
    <>
      <Product
        title="Laptop Stand"
        price={22000.99}
        inStock={true}
        categories={["computer, laptop"]}
      />
      <UserProfile />
      <UserForm />
    </>
  );
}

export default App;
