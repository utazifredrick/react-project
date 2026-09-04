export const NameList = () => {
  const names = ["Fred", "Bruce", "Joy"];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  return <div>{nameList}</div>;
};
