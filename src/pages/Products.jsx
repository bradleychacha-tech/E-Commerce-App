import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


function Products() {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
  useEffect(() => {
    fetch("http://localhost:6001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [])

  const filteredProducts = products.filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="mb-8 text-3xl font-bold">Products</h1>

        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search product" className="mb-8 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
         {filteredProducts.map((product) => (
           <ProductCard key={product.id} product={product} />))}
        </div>
    </div>
  )
}
export default Products