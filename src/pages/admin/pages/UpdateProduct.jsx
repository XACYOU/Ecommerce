import {useContext} from 'react'
import { context } from '../../../context/data/Context';

const UpdateProduct = () => {

    const {theme, product, setProduct, updateProduct} = useContext(context)

  return (
    <div data-theme={theme}>
      <div className=" my-30 py-10 px-4 rounded-2xl shadow-xl inset-shadow-sm flex flex-col gap-6 w-8/10 sm:w-7/10 md:w-5/10 lg:w-4/10 m-auto ">
        <h2 className="text-3xl font-bold text-center"> Update Product </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product title"
            value={product.title}
            name="title"
            onChange={(e)=> setProduct({...product, [e.target.name]:e.target.value})}
            className="w-full input"
          />
          <input
            type="number"
            placeholder="Product price"
            value={product.price}
            name="price"
            onChange={(e)=> setProduct({...product, [e.target.name]:e.target.value})}
            className="w-full input"
          />
          <input
            type="text"
            placeholder="Product imageUrl "
            value={product.imageUrl}
            name="imageUrl"
            onChange={(e)=> setProduct({...product, [e.target.name]:e.target.value})}
            className="w-full input"
          />
          <input
            type="text"
            placeholder="Product category "
            value={product.category}
            name="category"
            onChange={(e)=> setProduct({...product, [e.target.name]:e.target.value})}
            className="w-full input"
          />
          <textarea
            placeholder="Product description"
            value={product.description}
            name="description"
            onChange={(e)=> setProduct({...product, [e.target.name]:e.target.value})}
            className="w-full h-50 textarea textarea-md"
          ></textarea>
          <button onClick={updateProduct} className="w-full btn btn-primary">Update Product</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct