import React, { useState } from 'react';

const DoctorTestReport = () => {
  const [formData, setFormData] = useState({
    testType: '',
    doctorName: '',
    reportSummary: '',
  });

  // handleChange function to update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add any logic you want to handle form submission
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Doctor Test Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="testType" className="block text-sm font-medium mb-2">
            Test Type:
          </label>
          <input
            type="text"
            id="testType"
            name="testType"
            onChange={handleChange}
            value={formData.testType}
            placeholder="Enter test type (e.g., Blood Test)"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="doctorName" className="block text-sm font-medium mb-2">
            Doctor Name:
          </label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            onChange={handleChange}
            value={formData.doctorName}
            placeholder="Enter doctor's name"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reportSummary" className="block text-sm font-medium mb-2">
            Report Summary:
          </label>
          <textarea
            id="reportSummary"
            name="reportSummary"
            onChange={handleChange}
            value={formData.reportSummary}
            placeholder="Enter test report summary"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DoctorTestReport;
