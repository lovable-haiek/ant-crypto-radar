
import React from 'react';
import { Layout, Menu, Avatar, Space } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  WalletOutlined,
  TransactionOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;

type MenuItem = {
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'portfolio',
    icon: <WalletOutlined />,
    label: 'Portfolio',
    children: [
      {
        key: 'assets',
        label: 'My Assets',
      },
      {
        key: 'watchlist',
        label: 'Watchlist',
      },
    ],
  },
  {
    key: 'transactions',
    icon: <TransactionOutlined />,
    label: 'Transactions',
    children: [
      {
        key: 'buy',
        label: 'Buy',
      },
      {
        key: 'sell',
        label: 'Sell',
      },
      {
        key: 'history',
        label: 'History',
      },
    ],
  },
  {
    key: 'analytics',
    icon: <LineChartOutlined />,
    label: 'Analytics',
    children: [
      {
        key: 'performance',
        label: 'Performance',
      },
      {
        key: 'reports',
        label: 'Reports',
      },
    ],
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

const Header = () => {
  return (
    <AntHeader className="flex justify-between items-center bg-white px-6 shadow-sm h-screen">
      <div className="flex flex-col h-full w-64">
        <div className="text-xl font-bold text-blue-600 py-4">CryptoTracker</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          defaultOpenKeys={['portfolio']}
          className="h-full border-r"
          items={menuItems}
        />
      </div>
      <Space>
        <Avatar icon={<UserOutlined />} />
      </Space>
    </AntHeader>
  );
};

export default Header;
