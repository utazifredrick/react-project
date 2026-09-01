export const Greeting = ({ name = "Guest", message = "Hello" }) => {
  return (
    <>
      <h3>
        {message}, {name}
      </h3>
    </>
  );
};
