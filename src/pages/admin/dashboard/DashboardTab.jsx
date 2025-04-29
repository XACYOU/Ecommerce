import { ProductTable, OrderTable, UserTable } from "../../../components";
import { useNavigate } from "react-router-dom";
const DashboardTab = () => {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate("/addProduct")
  }
  return (
    <div className="mt-10">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lg tabs-lift flex justify-evenly border">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="🛒 Products"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h1 className="text-2xl text-center"> Product Details</h1>
          <div className="my-2 flex justify-end">
            <button onClick={addProduct} className="btn btn-primary"> Add Product </button>
          </div>
          <ProductTable />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="👜 Order"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h1 className="text-2xl text-center"> Product Details</h1>
          <OrderTable />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label=" 👤 Users"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h1 className="text-2xl text-center"> User Details</h1>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;
