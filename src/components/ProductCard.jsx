function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-3 font-bold">Ksh {product.price}</p>
            <p className="mt-1 text-sm text-gray-500">product.category</p>

        </div>
    </div>
  )
}
export default ProductCard