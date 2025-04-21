
import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="flex justify-end items-center bg-white px-6 border-b border-gray-100">
      <Avatar 
        icon={<UserOutlined />} 
        className="bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
      />
    </AntHeader>
  );
};

export default Header;
