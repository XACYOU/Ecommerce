import { useContext } from "react";
import { context } from "../../context/data/Context";
import { Card } from "../index";
const ProductCard = () => {
  const { products } = useContext(context);

  console.log(products);

  return (
    <div className="w-[80%] m-auto my-10 shadow p-10">
      <h1 className="text-3xl md:text-4xl"> Our Latest Collection </h1>
      <div className="h-1 w-20 bg-pink-600 rounded"></div>
      <div className="w-full sm:w-8/10 md:w-full m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {products.slice(0, 4).map((item, i) => {
          return <Card key={i} item={item} />;
        })}
      </div>
      <div className="flex justify-center">
        <button onClick={()=> window.location.href="/allproducts"} className="btn"> View All </button>
      </div>
    </div>
  );
};

export default ProductCard;
