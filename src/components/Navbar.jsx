import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white">
        <Link to="/" className="text-2xl font-bold">E-Commerce-App</Link>
        <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/products/new">Add Products</Link>

        </div>
    </nav>
  )
}
export default Navbar