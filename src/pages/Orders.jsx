import React from 'react';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { Table } from 'antd';

const Orders = () => {
  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="Page" title="Orders" />
      <Table   columns={ordersGrid} dataSource={ordersData}/>
    </div>
  );
};
export default Orders;