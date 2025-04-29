import { useContext } from "react";
import { context } from "../../context/data/Context";
import { Card } from "../../components";
import { Layout } from "../../components/index";
import { Loader } from "../../components/index";
const AllProducts = () => {
  const { products, loading } = useContext(context);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[80%] m-auto my-10 shadow p-10">
          <div className="w-full sm:w-8/10 md:w-full m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
            {products.map((item, i) => {
              return <Card key={i} item={item} />;
            })}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AllProducts;
