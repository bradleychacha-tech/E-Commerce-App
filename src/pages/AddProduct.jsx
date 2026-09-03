import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault()

    const newProduct = {
        name,price: Number(price),category,image,description
    }

     fetch("http://localhost:6001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added:", data);

        setName("");
        setPrice("");
        setCategory("");
        setImage("");
        setDescription("");
      });
  
}
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-xl rounded-lg bg bg-white p-6 shadow-md">
       <h1 className="mb-6 text-3xl font-bold">Add Product</h1>
       
     <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Product name" value={name} onChange={(event) => setName(event.target.value)}  className="w-full rounded border p-3"
            required
          /> 
      <input type="number" placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)} className="w-full rounded border p-3" required />

      <input type="text" placeholder="Category" value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded border p-3" required />

      <input type="text"  placeholder="Image URL" value={image} onChange={(event) => setImage(event.target.value)} className="w-full rounded border p-3" required />

      <textarea placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} className="w-full rounded border p-3" rows="4" required />

      <button type="submit" className="w-full rounded bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
          >
      Add Product
      </button>
        </form>
       </div>
        </div>
  )
}
export default AddProduct