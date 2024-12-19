import React, { useState } from "react";

const AssignResource = () => {
  const [formData, setFormData] = useState({
    resourceName: "",
    resourceType: "",
    assignedTo: "",
    startDate: "",
    endDate: "",
  });

  // Define the handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic to handle form submission here
  };

  return (
    <form
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Assign Resource</h2>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-sm" htmlFor="resourceName">
          Resource Name:
        </label>
        <input
          type="text"
          name="resourceName"
          placeholder="Enter resource name"
          value={formData.resourceName}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-sm" htmlFor="resourceType">
          Resource Type:
        </label>
        <select
          name="resourceType"
          value={formData.resourceType}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a type</option>
          <option value="Equipment">Equipment</option>
          <option value="Staff">Staff</option>
          <option value="Room">Room</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-sm" htmlFor="assignedTo">
          Assigned To:
        </label>
        <input
          type="text"
          name="assignedTo"
          placeholder="Enter assignee's name"
          value={formData.assignedTo}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-sm" htmlFor="startDate">
          Start Date:
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium text-sm" htmlFor="endDate">
          End Date:
        </label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AssignResource;
