export const Counter = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return <button onClick={handleClick}>Counter: {count}</button>;
};
