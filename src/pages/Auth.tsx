
import React from 'react';
import { Layout, Button, Typography, Space, Row, Col, Alert } from 'antd';
import { GoogleOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;
const { Content } = Layout;

const Auth = () => {
  const navigate = useNavigate();
  const districtName = "San Francisco Unified School District"; // This should be configured per district

  const handleGoogleSignIn = () => {
    // In a real implementation, this would handle Google authentication
    // For now, we'll just navigate to the home page
    navigate('/');
  };

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
              <div className="text-center mb-4">
                <Text className="text-gray-600 text-sm">{districtName}</Text>
                <Title level={2} className="!mb-0">Expanded Learning Admin Portal</Title>
                <Text className="text-gray-500 text-lg">Administrative access only</Text>
              </div>

              <Alert
                message="District Staff Only"
                description="This portal is restricted to authorized district expanded learning administrators. Please use your district Google Workspace email to sign in."
                type="info"
                showIcon
                className="mb-4"
              />

              <Button 
                icon={<GoogleOutlined />}
                size="large"
                block
                className="h-12 flex items-center justify-center text-base"
                onClick={handleGoogleSignIn}
              >
                Sign in with District Email
              </Button>

              <div className="mt-4">
                <Space direction="vertical" size="small" className="w-full">
                  <Text className="text-gray-500 text-sm text-center block">
                    Need access? Contact your district's Expanded Learning team
                  </Text>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <SafetyCertificateOutlined className="text-blue-500" />
                    <Text className="text-xs text-gray-400">Secure & FERPA Compliant</Text>
                  </div>
                </Space>
              </div>
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
                District Expanded Learning Management
              </Title>
              <Text className="text-white/90 text-lg leading-relaxed">
                Securely manage your district's expanded learning programs, track attendance, and monitor program effectiveness - all in one place. Built with FERPA compliance and student privacy in mind.
              </Text>
              
              <Space direction="vertical" className="mt-8 bg-white/10 p-6 rounded-lg">
                <Text className="text-white/90 text-sm">
                  • Secure administrative access
                </Text>
                <Text className="text-white/90 text-sm">
                  • FERPA & COPPA compliant
                </Text>
                <Text className="text-white/90 text-sm">
                  • End-to-end data encryption
                </Text>
              </Space>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Auth;
