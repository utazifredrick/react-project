import { use, useState } from "react";
export const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      <div>
        <input
          type="text"
          placeholder="type message"
          value={message}
          onChange={handleChange}
        />
        <p>{message}</p>
      </div>
    </>
  );
};
