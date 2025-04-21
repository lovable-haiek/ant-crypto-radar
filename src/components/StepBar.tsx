
import React from 'react';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = ['Account Setup', 'Verification', 'Add Assets', 'Complete'];

const StepBar = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const progress = (currentStep / (steps.length - 1)) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="w-full space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`text-sm font-medium ${
              index + 1 <= currentStep ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      <Progress value={progress} className="w-full" />
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StepBar;
