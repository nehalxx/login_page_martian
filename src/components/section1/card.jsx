import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center w-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

const DashboardRightPanel = () => {
  return (
    <div className="w-1/2 flex flex-col gap-6 p-6">
      <Card title="Transactions" value="245" />
      <Card title="Balance" value="$12,450.00" />
    </div>
  );
};

export default DashboardRightPanel;



