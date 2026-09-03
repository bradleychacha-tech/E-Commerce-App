import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
  <div className="mx-auto max-w-6xl">
    <h1 className="text-4xl font-bold text-gray-900">
          Welcome to E-Commerce-App
    </h1>

    <p className="mt-2 text-gray-600">
          Manage your products easily from one place.
    </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/products"
            className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">Products</h2>
            <p className="mt-2 text-gray-600">
              View and manage all your products.
            </p>
          </Link>

          <Link
            to="/products/new"
            className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">Add Product</h2>
            <p className="mt-2 text-gray-600">
              Add new products to your store.
            </p>
          </Link>

          <Link
            to="/products"
            className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">Manage Store</h2>
            <p className="mt-2 text-gray-600">
              Edit or remove existing products.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;