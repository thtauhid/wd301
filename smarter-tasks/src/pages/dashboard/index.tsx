import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  organisation_id: number;
  updatedAt: Date;
  createdAt: Date;
}

const Dashboard: React.FC = () => {
  const userData = localStorage.getItem("userData");
  const [data, setData] = useState<User | undefined>();

  useEffect(() => {
    if (userData) {
      setData(JSON.parse(userData));
    }
  }, []);
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
        Dashboard
      </h1>

      <p>Email: {data?.email}</p>
      <p>Name: {data?.name}</p>
    </div>
  );
};

export default Dashboard;
