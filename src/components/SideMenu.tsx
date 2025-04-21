
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  WalletOutlined,
  TransactionOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

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

const SideMenu = () => {
  return (
    <Sider width={250} className="bg-white" style={{ height: '100vh' }}>
      <div className="h-16 flex items-center justify-center">
        <div className="text-xl font-bold text-blue-600">CryptoTracker</div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['portfolio']}
        className="h-full border-r"
        items={menuItems}
      />
    </Sider>
  );
};

export default SideMenu;
