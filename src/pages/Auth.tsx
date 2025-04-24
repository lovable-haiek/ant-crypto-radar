
import React from 'react';
import { Layout, Button, Typography, Space, Row, Col } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Content } = Layout;

const Auth = () => {
  return (
    <Layout className="h-screen">
      <Content className="h-full">
        <Row className="h-full">
          {/* Left side - Auth buttons */}
          <Col 
            xs={24} 
            md={12} 
            className="p-8 flex items-center justify-center bg-white h-full"
          >
            <Space direction="vertical" size="large" className="w-full max-w-[400px]">
              <Title level={2} className="!mb-0">Welcome to Dashboard</Title>
              <Text className="text-gray-500 text-lg mb-8">Sign up to get started</Text>
              <Button 
                icon={<GoogleOutlined />}
                size="large"
                block
                className="h-12 flex items-center justify-center text-base"
                onClick={() => {
                  console.log('Google sign up clicked');
                }}
              >
                Continue with Google
              </Button>
            </Space>
          </Col>

          {/* Right side - Value proposition */}
          <Col 
            xs={0} 
            md={12} 
            className="bg-gradient-to-br from-[#1890ff] to-[#0050b3] p-8 flex items-center justify-center h-full"
          >
            <Space direction="vertical" align="center" className="text-center max-w-[500px]">
              <Title level={2} className="!text-white !mb-6">
                Manage Your Assets Efficiently
              </Title>
              <Text className="text-white/90 text-lg leading-relaxed">
                Get real-time insights and powerful analytics tools to track and optimize your portfolio performance
              </Text>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Auth;
