import React, { useRef, useState } from 'react';
import { employeesData, gridEmployeeCountry, gridEmployeeProfile } from '../data/dummy';
import { Header } from '../components';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Employees() {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="small"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small">
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
  });

  const employeesGrid = [
    {
      title: 'Employee',
      width: '150',
      render: gridEmployeeProfile,
      textAlign: 'center',
    },
    {
      dataIndex: 'Name',
      title: 'Name',
      width: '150',
      textAlign: 'center',
      ...getColumnSearchProps('Name'),
    },
    {
      dataIndex: 'Title',
      title: 'Designation',
      width: '170',
      textAlign: 'center',
      ...getColumnSearchProps('Title'),
    },
    {
      title: 'Country',
      width: '120',
      textAlign: 'center',
      render: gridEmployeeCountry,
    },
    {
      dataIndex: 'HireDate',
      title: 'Hire Date',
      width: '135',
      textAlign: 'center',
    },
    {
      dataIndex: 'ReportsTo',
      title: 'Reports To',
      width: '120',
      textAlign: 'center',
    },
    {
      dataIndex: 'EmployeeID',
      title: 'Employee ID',
      width: '125',
      textAlign: 'center',
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="Page" title="Employees" />
      <Table columns={employeesGrid} dataSource={employeesData} />
    </div>
  );
}

export default Employees;
