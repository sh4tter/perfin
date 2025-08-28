import React, { useState, useEffect } from 'react';
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  WalletIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import StatsCard from './StatsCard';
import FinancialChart from './FinancialChart';
import RecentTransactions from './RecentTransactions';
import { useAuth } from '../../contexts/AuthContext';
import { healthAPI, authAPI } from '../../services/api';

// Mock data for demonstration
const monthlyData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 5000, expenses: 3200 },
  { name: 'Apr', income: 4500, expenses: 2800 },
  { name: 'May', income: 6000, expenses: 3800 },
  { name: 'Jun', income: 5500, expenses: 4300 },
];

const categoryData = [
  { name: 'Food', value: 1200 },
  { name: 'Housing', value: 2000 },
  { name: 'Transportation', value: 400 },
  { name: 'Entertainment', value: 300 },
  { name: 'Healthcare', value: 250 },
  { name: 'Other', value: 350 },
];

const savingsData = [
  { name: 'Jan', amount: 1600 },
  { name: 'Feb', amount: 1602 },
  { name: 'Mar', amount: 1800 },
  { name: 'Apr', amount: 1700 },
  { name: 'May', amount: 2200 },
  { name: 'Jun', amount: 1200 },
];

const EnhancedDashboard: React.FC = () => {
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
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg p-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl">
              Welcome back, {user?.username}!
            </h2>
            <p className="mt-1 text-primary-100">
              Here's what's happening with your finances today.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <div className="flex space-x-3">
              <div className="text-right">
                <p className="text-sm text-primary-100">API Status</p>
                <p className={`font-semibold ${healthStatus === 'UP' ? 'text-green-200' : 'text-red-200'}`}>
                  {healthStatus}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-primary-100">Auth Status</p>
                <p className={`font-semibold ${apiTest.includes('success') ? 'text-green-200' : 'text-yellow-200'}`}>
                  {apiTest.includes('success') ? 'Connected' : 'Checking...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Balance"
          value="$12,345"
          change="+12.5%"
          changeType="increase"
          icon={WalletIcon}
          iconBgColor="bg-green-500"
        />
        <StatsCard
          title="Monthly Income"
          value="$5,500"
          change="+8.2%"
          changeType="increase"
          icon={ArrowTrendingUpIcon}
          iconBgColor="bg-blue-500"
        />
        <StatsCard
          title="Monthly Expenses"
          value="$4,300"
          change="+15.3%"
          changeType="decrease"
          icon={ArrowTrendingDownIcon}
          iconBgColor="bg-red-500"
        />
        <StatsCard
          title="Savings Rate"
          value="22%"
          change="+2.1%"
          changeType="increase"
          icon={ChartBarIcon}
          iconBgColor="bg-purple-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <FinancialChart
          type="line"
          data={monthlyData}
          title="Income vs Expenses"
          height={350}
        />
        <FinancialChart
          type="pie"
          data={categoryData}
          title="Expense Categories"
          height={350}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Transactions - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>

        {/* Savings Trend - Takes 1 column */}
        <div>
          <FinancialChart
            type="bar"
            data={savingsData}
            title="Monthly Savings"
            height={300}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <button className="flex flex-col items-center p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200">
            <CurrencyDollarIcon className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-700">Add Income</span>
          </button>
          <button className="flex flex-col items-center p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200">
            <ArrowTrendingDownIcon className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-700">Add Expense</span>
          </button>
          <button className="flex flex-col items-center p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200">
            <ChartBarIcon className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-700">View Report</span>
          </button>
          <button className="flex flex-col items-center p-4 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200">
            <WalletIcon className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm font-medium text-gray-700">Set Budget</span>
          </button>
        </div>
      </div>

      {/* Development Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-blue-800 font-medium">Development Status</h4>
        <p className="text-blue-700 text-sm mt-1">
          This is a modern dashboard UI preview. The transaction data shown is mock data for demonstration. 
          Real transaction management features will be implemented in the next development phase.
        </p>
      </div>
    </div>
  );
};

export default EnhancedDashboard;
