import React, { useState } from "react";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
import { Table } from "antd";

function Customers() {
  const [data, setData] = useState(customersData);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);

    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleDelete = () => {
    const newData = data.filter((item) => !selectedRowKeys.includes(item.key));
    setData(newData);
    setSelectedRowKeys([]);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className="mb-4">
        <button
          type="button"
          danger
          disabled={!selectedRowKeys.length}
          onClick={handleDelete}
          className={`px-4 py-2 rounded font-semibold 
    ${!selectedRowKeys.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}
  `}
        >
          Delete Selected
        </button>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={customersGrid}
        dataSource={data}
      />
    </div>
  );
}

export default Customers;
