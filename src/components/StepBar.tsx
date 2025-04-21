
import React from 'react';
import { Steps, Button, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useIsMobile } from '../hooks/use-mobile';

const steps = ['Account Setup', 'Verification', 'Add Assets', 'Complete'];

const StepBar = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const isMobile = useIsMobile();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-sm space-y-6">
      <Steps
        current={currentStep}
        items={steps.map(title => ({ title }))}
        direction={isMobile ? 'vertical' : 'horizontal'}
        responsive={false}
      />
      <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex justify-between'} pt-4`}>
        <Button 
          onClick={handlePrev}
          disabled={currentStep === 0}
          icon={<LeftOutlined />}
          block={isMobile}
        >
          Previous
        </Button>
        <Button 
          type="primary"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          block={isMobile}
        >
          Next <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default StepBar;
