import { useContext } from "react";
import { context } from "../../context/data/Context";

const UserTable = () => {
  const { user } = useContext(context);

  return (
    <div>
      <table className="w-full">
        <thead className=" text-black uppercase bg-gray-200 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.No
            </th>
            <th scope="col" className="px-6 py-3">
              Uid
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
        {user.map((u, i) => {
          const { name, email, uid } = u;
          return (
            <tbody key={i}>
              <tr className="bg-gray-50 border-b  dark:border-gray-700">
                <td className="text-center px-6 py-4 text-black ">{i + 1}.</td>
                <td className="text-center px-6 py-4 text-black ">{uid}</td>
                <td className="text-center px-6 py-4 text-black ">{name}</td>
                <td className="text-center px-6 py-4 text-black ">{email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default UserTable;
