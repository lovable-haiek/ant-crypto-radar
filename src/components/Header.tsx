
import React from 'react';
import { Layout, Menu, Avatar, Space } from 'antd';
import { UserOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="flex justify-between items-center bg-white px-6 shadow-sm">
      <div className="text-xl font-bold text-blue-600">CryptoTracker</div>
      <Space>
        <Menu mode="horizontal" defaultSelectedKeys={['dashboard']}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
        <Avatar icon={<UserOutlined />} />
      </Space>
    </AntHeader>
  );
};

export default Header;
