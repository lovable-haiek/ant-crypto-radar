
import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import AssetOverview from '../components/AssetOverview';
import AssetList from '../components/AssetList';

const { Content } = Layout;

const Index = () => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Layout>
        <Content className="p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <AssetOverview />
          <AssetList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
