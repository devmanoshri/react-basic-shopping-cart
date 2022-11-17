const productsArray = [
  {
    id: 1,
    title: "Coffee",
    price: 5.76,
  },
  {
    id: 2,
    title: "Tea",
    price: 2.9,
  },
  {
    id: 3,
    title: "Cola",
    price: 10.4,
  },
  {
    id: 4,
    title: "Hot Chocolate",
    price: 29.5,
  },
];

// Helper Function
function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID:" + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
