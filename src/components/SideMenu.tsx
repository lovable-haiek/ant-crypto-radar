
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  WalletOutlined,
  TransactionOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { useIsMobile } from '../hooks/use-mobile';

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
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useIsMobile();

  // Auto-collapse menu on mobile
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  const menuComponent = (
    <>
      <div className="h-16 flex items-center px-6">
        <div className={`text-xl font-semibold text-blue-600 ${collapsed && !isMobile ? 'hidden' : 'block'}`}>
          CryptoTracker
        </div>
        {!isMobile && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={`text-gray-600 ${!collapsed && 'ml-auto'}`}
          />
        )}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={isMobile ? [] : ['portfolio']}
        className="border-0"
        items={menuItems}
      />
    </>
  );

  if (isMobile) {
    return (
      <>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
          className="fixed z-10 top-3 left-3 bg-white shadow-sm"
        />
        <Drawer
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          bodyStyle={{ padding: 0 }}
          headerStyle={{ display: 'none' }}
          width={250}
        >
          {menuComponent}
        </Drawer>
      </>
    );
  }

  return (
    <Sider 
      width={250} 
      collapsible 
      collapsed={collapsed}
      trigger={null}
      className="bg-white border-r border-gray-100" 
      style={{ height: '100vh' }}
    >
      {menuComponent}
    </Sider>
  );
};

export default SideMenu;
