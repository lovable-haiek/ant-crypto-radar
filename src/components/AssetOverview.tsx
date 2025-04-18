
import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const AssetOverview = () => {
  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Total Portfolio Value"
            value={34567.89}
            precision={2}
            prefix="$"
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="24h Change"
            value={11.28}
            precision={2}
            prefix={<ArrowUpOutlined />}
            suffix="%"
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Total Assets"
            value={8}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Best Performer"
            value={23.45}
            precision={2}
            prefix={<ArrowUpOutlined />}
            suffix="%"
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default AssetOverview;
