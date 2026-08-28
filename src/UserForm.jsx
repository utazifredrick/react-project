export const UserForm = () => {
  return (
    <form className="user-form">
      <input
        type="text"
        id="username"
        className="input-form"
        placeholder="username"
      ></input>
      <br />
      <input
        type="email"
        id="email"
        className="input-form"
        placeholder="email"
      ></input>
    </form>
  );
};
