export const CustomButton = ({ text }) => {
  const name = "fredzone";
  const handleClick = (e) => {
    alert(`Hey ${name} you clicked ${text}`);
  };

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};
