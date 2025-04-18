
import React from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  symbol: string;
  holdings: number;
  price: number;
  value: number;
  change24h: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Asset',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div className="flex items-center">
        <span className="font-medium">{text}</span>
        <Tag color="blue" className="ml-2">{record.symbol}</Tag>
      </div>
    ),
  },
  {
    title: 'Holdings',
    dataIndex: 'holdings',
    key: 'holdings',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (value) => `$${value.toLocaleString()}`,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    render: (value) => `$${value.toLocaleString()}`,
  },
  {
    title: '24h Change',
    dataIndex: 'change24h',
    key: 'change24h',
    render: (value) => (
      <span style={{ color: value >= 0 ? '#3f8600' : '#cf1322' }}>
        {value >= 0 ? '+' : ''}{value.toFixed(2)}%
      </span>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    holdings: 0.5,
    price: 45000,
    value: 22500,
    change24h: 2.34,
  },
  {
    key: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    holdings: 4.2,
    price: 2800,
    value: 11760,
    change24h: -1.23,
  },
  {
    key: '3',
    name: 'Cardano',
    symbol: 'ADA',
    holdings: 1000,
    price: 0.5,
    value: 500,
    change24h: 5.67,
  },
];

const AssetList = () => {
  return (
    <Table 
      columns={columns} 
      dataSource={data}
      pagination={false}
      className="shadow-sm"
    />
  );
};

export default AssetList;
