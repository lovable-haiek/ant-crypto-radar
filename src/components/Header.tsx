
import React from 'react';
import { Layout, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="flex justify-between items-center bg-white px-6 shadow-sm">
      <div className="text-xl font-bold text-blue-600">CryptoTracker</div>
      <Space>
        <Avatar icon={<UserOutlined />} />
      </Space>
    </AntHeader>
  );
};

export default Header;
