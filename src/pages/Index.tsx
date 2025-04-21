
import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import AssetOverview from '../components/AssetOverview';
import AssetList from '../components/AssetList';
import StepBar from '../components/StepBar';

const { Content } = Layout;

const Index = () => {
  return (
    <Layout className="min-h-screen">
      <SideMenu />
      <Layout>
        <Header />
        <Content className="p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <div className="mb-6">
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
