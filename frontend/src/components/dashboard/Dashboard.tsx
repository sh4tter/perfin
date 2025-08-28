import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { healthAPI, authAPI } from '../../services/api';
import Navbar from '../layout/Navbar';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [healthStatus, setHealthStatus] = useState<string>('checking...');
  const [apiTest, setApiTest] = useState<string>('testing...');

  useEffect(() => {
    // Test health endpoint
    healthAPI.check()
      .then((response) => setHealthStatus(response.status))
      .catch(() => setHealthStatus('error'));

    // Test authenticated endpoint
    authAPI.test()
      .then((response) => setApiTest(response.message))
      .catch(() => setApiTest('authentication error'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Dashboard
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User Info Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {user?.username?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          User Information
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {user?.username}
                        </dd>
                        <dd className="text-sm text-gray-500">
                          {user?.email}
                        </dd>
                        <dd className="text-xs text-gray-400">
                          Role: {user?.role}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Status Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 ${
                        healthStatus === 'UP' ? 'bg-green-500' : 'bg-red-500'
                      } rounded-full flex items-center justify-center`}>
                        <span className="text-white font-medium">
                          {healthStatus === 'UP' ? '✓' : '✗'}
                        </span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          API Health
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {healthStatus}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* API Test Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 ${
                        apiTest.includes('success') ? 'bg-green-500' : 'bg-orange-500'
                      } rounded-full flex items-center justify-center`}>
                        <span className="text-white font-medium">
                          API
                        </span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Authentication Test
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {apiTest}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Getting Started
                </h2>
                <div className="prose prose-sm text-gray-600">
                  <p>
                    Welcome to your Finance Tracker dashboard! This is where you'll manage
                    your personal finances. The application is currently in development with
                    the following planned features:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>✅ User Authentication & Authorization</li>
                    <li>🔄 Transaction Management (Coming Soon)</li>
                    <li>📊 Financial Insights & Analytics (Coming Soon)</li>
                    <li>📈 Reports & Export Features (Coming Soon)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
