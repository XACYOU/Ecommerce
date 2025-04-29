import { useContext, useEffect, useState } from "react";
import { context } from "../../context/data/Context";

const OrderTable = () => {
  const { order } = useContext(context);

  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    const items = order.flatMap((order) =>
      order.cartItems.map((item) => ({
        ...item,
        paymentId: order.paymentId,
        email: order.email,
        date: order.date,
        name: order.addressInfo.name,
        address: order.addressInfo.address,
        phoneNumber: order.addressInfo.phoneNumber,
        pincode: order.addressInfo.pincode,
      }))
    );
    setOrderInfo(items);
  }, [order]);

  return (
    <div>
      <table className="border overflow-x-auto w-full">
        <thead className="text-xs text-black uppercase bg-gray-200 ">
          <tr>
            <th scope="col" className="px-3 py-3">
              Payment Id
            </th>
            <th scope="col" className="px-3 py-3">
              Image
            </th>
            <th scope="col" className="px-3 py-3">
              Title
            </th>
            <th scope="col" className="px-3 py-3">
              Price
            </th>
            <th scope="col" className="px-3 py-3">
              Category
            </th>
            <th scope="col" className="px-3 py-3">
              Name
            </th>
            <th scope="col" className="px-3 py-3">
              Address
            </th>
            <th scope="col" className="px-3 py-3">
              Pincode
            </th>
            <th scope="col" className="px-3 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-3 py-3">
              Email
            </th>
            <th scope="col" className="px-3 py-3">
              Date
            </th>
          </tr>
        </thead>
        {orderInfo.map((item, i) => {
          const { paymentId, title, imageUrl, category, price, name, pincode, address, date, email, phoneNumber } = item;
          return (
            <tbody key={i}>
              <tr className="bg-gray-50 border-b text-center dark:border-gray-700">
                <td className="px-1 py-4 text-black ">{paymentId}</td>
                <th
                  scope="row"
                  className="flex justify-center px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  <img className=" h-16" src={imageUrl} alt={title} />
                </th>
                <td className="px-1 py-4 text-black ">{title}</td>
                <td className="px-1 py-4 text-black ">₹{price}</td>
                <td className="px-1 py-4 text-black ">{category}</td>

                <td className="px-1 py-4 text-black ">{name}</td>
                <td className="px-1 py-4 text-black ">{address}</td>
                <td className="px-1 py-4 text-black ">{pincode}</td>
                <td className="px-1 py-4 text-black ">{phoneNumber}</td>
                <td className="px-1 py-4 text-black ">{email}</td>
                <td className="px-1 py-4 text-black ">{date}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default OrderTable;
