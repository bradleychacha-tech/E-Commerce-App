import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return { products, setProducts };
}

export default useProducts;