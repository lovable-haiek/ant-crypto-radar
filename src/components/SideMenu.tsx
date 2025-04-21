
import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  WalletOutlined,
  TransactionOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined className="text-gray-600" />,
    label: 'Dashboard',
  },
  {
    key: 'portfolio',
    icon: <WalletOutlined className="text-gray-600" />,
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
    icon: <TransactionOutlined className="text-gray-600" />,
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
    icon: <LineChartOutlined className="text-gray-600" />,
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
    icon: <SettingOutlined className="text-gray-600" />,
    label: 'Settings',
  },
];

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider 
      width={250} 
      collapsible 
      collapsed={collapsed}
      trigger={null}
      className="bg-white border-r border-gray-100" 
      style={{ height: '100vh' }}
    >
      <div className="h-16 flex items-center px-6">
        <div className={`text-xl font-semibold text-blue-600 ${collapsed ? 'hidden' : 'block'}`}>
          CryptoTracker
        </div>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className={`text-gray-600 ${!collapsed && 'ml-auto'}`}
        />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['portfolio']}
        className="border-0"
        items={menuItems}
      />
    </Sider>
  );
};

export default SideMenu;
