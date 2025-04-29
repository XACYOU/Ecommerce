import { useContext, useEffect, useState } from "react";
import { context } from "../../context/data/Context";
import { Layout, Loader } from "../../components/index";
const Order = () => {
  const userId = JSON.parse(localStorage.getItem("user")).user.uid;
  const { loading, order } = useContext(context);

  const [allCartItems, setAllCartItems] = useState([]);
  
  useEffect(() => {
    const userOrders = order.filter((obj) => obj.userId === userId);
    const items = userOrders.flatMap((order) => order.cartItems);
    setAllCartItems(items)
  }, [order, userId]);

  return (
    <Layout>
      {loading && <Loader />}
      {allCartItems.length > 0 ? (
        <>
          <div
            className=" w-9/10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-20"
          >
            {allCartItems.map((item, i) => {
              const { title, description, imageUrl, price } = item;
              return (
                <div
                  key={i}
                  className="w-8/10 mx-auto flex card bg-base-100 shadow-lg p-4 break-words"
                >
                  <figure>
                    <img src={imageUrl} alt={title} className=" h-40" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="font-bold">{price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          ;
        </>
      ) : (
        <div>
          <p>No Order Found</p>
        </div>
      )}
    </Layout>
  );
};

export default Order;
