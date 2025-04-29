import React from "react";
import { Layout } from "../../../components";
import {DashboardTab} from "../../index";
import { FaUserTie } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className=" mt-20 w-8/10 m-auto flex flex-col md:flex-row gap-4 ">
          <div className="shadow-md hover:shadow-green-200 w-8/10 m-auto p-4 flex flex-col items-center hover:text-green-700">
            <FaUserTie size={50} />
            <h2 className="text-2xl font-bold pt-4">10</h2>
            <p className="text-md"> Total Products </p>
          </div>
          <div className="shadow-md hover:shadow-green-200 w-8/10 m-auto p-4 flex flex-col items-center hover:text-green-700">
            <FaUserTie size={50} />
            <h2 className="text-2xl font-bold pt-4">10</h2>
            <p className="text-md"> Total Orders </p>
          </div>
          <div className="shadow-md hover:shadow-green-200 w-8/10 m-auto p-4 flex flex-col items-center hover:text-green-700">
            <FaUserTie size={50} />
            <h2 className="text-2xl font-bold pt-4">20</h2>
            <p className="text-md"> Total Users </p>
          </div>
          <div className="shadow-md hover:shadow-green-200 w-8/10 m-auto p-4 flex flex-col items-center hover:text-green-700">
            <FaUserTie size={50} />
            <h2 className="text-2xl font-bold pt-4">10</h2>
            <p className="text-md"> Total Products </p>
          </div>
        </div>
        <DashboardTab />
      </div>
    </Layout>
  );
};

export default Dashboard;
