
import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import AssetOverview from '../components/AssetOverview';
import AssetList from '../components/AssetList';
import StepBar from '../components/StepBar';
import { useIsMobile } from '../hooks/use-mobile';

const { Content } = Layout;

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <Layout className="min-h-screen">
      <SideMenu />
      <Layout>
        <Header />
        <Content className="p-4 md:p-6 bg-gray-50">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Dashboard</h1>
          <div className="mb-4 md:mb-6">
            <StepBar />
          </div>
          <AssetOverview />
          <AssetList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
