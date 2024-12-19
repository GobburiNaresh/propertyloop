import React, { useState } from 'react';
import PatientDetails from './PatientDetails'; 
import AssignResource from './AssignResource'; 
import DoctorTestReport from './DoctorTestReport';

const PatientRegister = () => {
  const [currentStep, setCurrentStep] = useState(1); 
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="mt-[50px]">
      <h1 className="text-center text-2xl font-bold mb-6">Register a New Patient</h1>
      <div className="mb-6 flex space-x-6 justify-center">
        <button
          onClick={() => setCurrentStep(1)}
          className={`px-4 py-2 font-semibold ${currentStep === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-md`}
        >
          Step 1: Patient Details
        </button>
        <button
          onClick={() => setCurrentStep(2)}
          className={`px-4 py-2 font-semibold ${currentStep === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-md`}
        >
          Step 2: Assign Resources
        </button>
        <button
          onClick={() => setCurrentStep(3)}
          className={`px-4 py-2 font-semibold ${currentStep === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-md`}
        >
          Step 3: Doctor Test
        </button>
      </div>

      {/* Step Content */}
      <div className="p-4 border rounded-md">
        {currentStep === 1 && <PatientDetails formData={formData} handleChange={handleChange} />}
        {currentStep === 2 && <AssignResource formData={formData} handleChange={handleChange} />}
        {currentStep === 3 && <DoctorTestReport formData={formData} handleChange={handleChange} />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default PatientRegister;
