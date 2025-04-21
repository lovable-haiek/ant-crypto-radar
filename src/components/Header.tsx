
import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useIsMobile } from '../hooks/use-mobile';

const { Header: AntHeader } = Layout;

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <AntHeader className={`flex justify-end items-center bg-white px-6 border-b border-gray-100 ${isMobile ? 'h-14' : 'h-16'}`}>
      <Avatar 
        icon={<UserOutlined />} 
        className="bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
      />
    </AntHeader>
  );
};

export default Header;
