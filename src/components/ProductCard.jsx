import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
    return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-3 font-bold">Ksh {product.price}</p>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            <Link to={`/products/${product.id}/edit`}className="mt-4 inline-block rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700">Edit</Link>
            <button onClick={() => onDelete(product.id)} className="rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">Delete</button>

        </div>
    </div>
  )
}
export default ProductCard