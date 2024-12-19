import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaQuestionCircle, FaBell, FaUser, FaSignOutAlt, FaCaretDown } from "react-icons/fa";

const TopMenuBar = () => {
  const [showPatientData, setShowPatientData] = useState(false);
  const [showOperationTheater, setShowOperationTheater] = useState(false);
  const [showReports, setShowReports] = useState(false);

  const handleToggle = (menu) => {
    switch (menu) {
      case "patientData":
        setShowPatientData(!showPatientData);
        break;
      case "operationTheater":
        setShowOperationTheater(!showOperationTheater);
        break;
      case "reports":
        setShowReports(!showReports);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-blue-900 text-white flex items-center justify-between px-6 py-4 shadow-lg">
      <div className="flex items-center space-x-8">
        <div className="text-2xl font-bold">
          <Link to="/">Hospital Logo</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/dashboard" activeClassName="text-yellow-500 hover:text-yellow-400">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/patient-register" activeClassName="text-yellow-500 hover:text-yellow-400">
              Patient Register
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={() => handleToggle("patientData")}
              className="flex items-center text-white bg-transparent cursor-pointer focus:outline-none hover:text-yellow-400"
              aria-expanded={showPatientData}
              aria-controls="patientDataMenu"
            >
              Patient Data <FaCaretDown className="ml-1" />
            </button>
            {showPatientData && (
              <ul
                id="patientDataMenu"
                className="absolute bg-gray-700 text-white mt-2 py-2 rounded-lg shadow-lg z-10 w-40"
              >
                <li>
                  <NavLink to="/dummy-link-1" className="px-4 py-2 hover:bg-gray-600">
                    Link 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dummy-link-2" className="px-4 py-2 hover:bg-gray-600">
                    Link 2
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => handleToggle("operationTheater")}
              className="flex items-center text-white bg-transparent cursor-pointer focus:outline-none hover:text-yellow-400"
              aria-expanded={showOperationTheater}
              aria-controls="operationTheaterMenu"
            >
              Operation Theater <FaCaretDown className="ml-1" />
            </button>
            {showOperationTheater && (
              <ul
                id="operationTheaterMenu"
                className="absolute bg-gray-700 text-white mt-2 py-2 rounded-lg shadow-lg z-10 w-40"
              >
                <li>
                  <NavLink to="/dummy-link-3" className="px-4 py-2 hover:bg-gray-600">
                    Link 3
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dummy-link-4" className="px-4 py-2 hover:bg-gray-600">
                    Link 4
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => handleToggle("reports")}
              className="flex items-center text-white bg-transparent cursor-pointer focus:outline-none hover:text-yellow-400"
              aria-expanded={showReports}
              aria-controls="reportsMenu"
            >
              Reports <FaCaretDown className="ml-1" />
            </button>
            {showReports && (
              <ul
                id="reportsMenu"
                className="absolute bg-gray-700 text-white mt-2 py-2 rounded-lg shadow-lg z-10 w-40"
              >
                <li>
                  <NavLink to="/dummy-link-5" className="px-4 py-2 hover:bg-gray-600">
                    Report Link 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dummy-link-6" className="px-4 py-2 hover:bg-gray-600">
                    Report Link 2
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-6">
        <FaQuestionCircle size={20} className="cursor-pointer hover:text-yellow-500" />
        <FaBell size={20} className="cursor-pointer hover:text-yellow-500" />
        <FaUser size={20} className="cursor-pointer hover:text-yellow-500" />
        <FaSignOutAlt size={20} className="cursor-pointer hover:text-yellow-500" />
      </div>
    </nav>
  );
};

export default TopMenuBar;
