import { useContext } from "react";
import { context } from "../../../context/data/Context";

const AddProduct = () => {
  const { theme, product, setProduct, addProduct } = useContext(context);

  return (
    <div data-theme={theme}>
      <div className=" my-30 py-10 px-4 rounded-2xl shadow-xl inset-shadow-sm flex flex-col gap-6 w-8/10 sm:w-7/10 md:w-5/10 lg:w-4/10 m-auto ">
        <h2 className="text-3xl font-bold text-center"> Add Product </h2>
        <div className="flex flex-col gap-4">
          <input
            value={product.title}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            name="title"
            type="text"
            placeholder="Product title"
            className="w-full input"
          />
          <input
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            name="price"
            type="number"
            placeholder="Product price"
            className="w-full input"
          />
          <input
            value={product.imageUrl}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            name="imageUrl"
            type="text"
            placeholder="Product imageUrl "
            className="w-full input"
          />
          <input
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            name="category"
            type="text"
            placeholder="Product category "
            className="w-full input"
          />
          <textarea
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            name="description"
            placeholder="Product description"
            className="w-full h-50 textarea textarea-md"
          ></textarea>
          <button onClick={addProduct} className="w-full btn btn-primary">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
