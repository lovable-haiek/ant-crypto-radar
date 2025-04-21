
import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="flex justify-end items-center bg-white px-6 shadow-sm">
      <Avatar icon={<UserOutlined />} />
    </AntHeader>
  );
};

export default Header;
