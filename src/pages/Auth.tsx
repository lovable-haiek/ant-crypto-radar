
import React from 'react';
import { Layout, Button, Typography, Space, Row, Col } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Content } = Layout;

const Auth = () => {
  return (
    <Layout className="min-h-screen">
      <Content>
        <Row>
          {/* Left side - Auth buttons */}
          <Col xs={24} md={12} className="p-8 flex items-center justify-center bg-white">
            <Space direction="vertical" size="large" className="w-full max-w-[400px]">
              <Title level={2}>Welcome to Dashboard</Title>
              <Text className="text-gray-500 mb-8">Sign up to get started</Text>
              <Button 
                icon={<GoogleOutlined />}
                size="large"
                block
                className="h-12"
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
            className="bg-[#1890ff] p-8 flex items-center justify-center"
          >
            <Space direction="vertical" align="center" className="text-center">
              <Title level={2} className="text-white">
                Manage Your Assets Efficiently
              </Title>
              <Text className="text-white text-lg">
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
