
import React from 'react';
import { Steps, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const steps = ['Account Setup', 'Verification', 'Add Assets', 'Complete'];

const StepBar = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

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
    <div className="w-full bg-white p-6 rounded-lg shadow-sm space-y-6">
      <Steps
        current={currentStep}
        items={steps.map(title => ({ title }))}
      />
      <div className="flex justify-between pt-4">
        <Button 
          onClick={handlePrev}
          disabled={currentStep === 0}
          icon={<LeftOutlined />}
        >
          Previous
        </Button>
        <Button 
          type="primary"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Next <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default StepBar;
