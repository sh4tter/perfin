import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  CreditCardIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Transactions', href: '/transactions', icon: CreditCardIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Reports', href: '/reports', icon: DocumentTextIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col w-64 bg-gray-900">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-white text-lg font-medium">Finance Tracker</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
          <div className="flex items-center">
            <div>
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{user?.username}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
