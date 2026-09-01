export const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 2000 },
    { id: 2, name: "Mouse", price: 200 },
    { id: 3, name: "T.V", price: 500 },
  ];

  const productElement = products
    .filter((product) => {
      return product.price > 500;
    })
    .map((product) => {
      return (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Our Product</h2>
      {productElement}
    </div>
  );
};
