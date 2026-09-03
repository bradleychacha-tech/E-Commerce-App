import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/products/${id}`)
      .then((response) => response.json())
      .then((product) => {
        setName(product.name);
        setPrice(product.price);
        setCategory(product.category);
        setImage(product.image);
        setDescription(product.description);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();

    const updatedProduct = {
      name,
      price: Number(price),
      category,
      image,
      description,
    };

    fetch(`http://localhost:6001/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product updated:", data);
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-3xl font-bold">Edit Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Product name"
            className="w-full rounded border p-3"
            required
          />

          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Price"
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Category"
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="Image URL"
            className="w-full rounded border p-3"
            required
          />

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description"
            className="w-full rounded border p-3"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full rounded bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;