import React from "react";

const DeptAdminConventionalScheme = () => {
  const tableData = [
    { id: 1, Scheme: "Scheme 1" },
    { id: 2, Scheme: "Scheme 2" },
    { id: 3, Scheme: "Scheme 3" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 bg-blue-300">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border h-16 text-base text-center">Scheme Name</th>
            <th className="border h-16 text-base text-center">
              Tendered Amount
            </th>

            <th className="border h-16 text-base text-center">
              Cumulative Amount
            </th>
            <th className="border h-16 text-base text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td className="border h-16 text-base text-center text-white">
                {item.Scheme}
              </td>
              <td className="border h-16 text-base text-center"></td>
              <td className="border h-16 text-base text-center"></td>
              <td className="border h-16 text-base text-center"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeptAdminConventionalScheme;
