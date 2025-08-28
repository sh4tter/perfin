import React from 'react';
import {
  ShoppingCartIcon,
  HomeIcon,
  TruckIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Salary Payment',
    amount: 5000,
    type: 'income',
    category: 'Salary',
    date: '2024-01-15',
  },
  {
    id: '2',
    description: 'Grocery Shopping',
    amount: -120.50,
    type: 'expense',
    category: 'Food',
    date: '2024-01-14',
  },
  {
    id: '3',
    description: 'Netflix Subscription',
    amount: -15.99,
    type: 'expense',
    category: 'Entertainment',
    date: '2024-01-13',
  },
  {
    id: '4',
    description: 'Rent Payment',
    amount: -1200,
    type: 'expense',
    category: 'Housing',
    date: '2024-01-12',
  },
  {
    id: '5',
    description: 'Freelance Project',
    amount: 800,
    type: 'income',
    category: 'Freelance',
    date: '2024-01-11',
  },
];

const categoryIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Food: ShoppingCartIcon,
  Housing: HomeIcon,
  Transportation: TruckIcon,
  Education: AcademicCapIcon,
  Healthcare: HeartIcon,
  Entertainment: ShoppingCartIcon,
  Salary: HomeIcon,
  Freelance: AcademicCapIcon,
};

const RecentTransactions: React.FC = () => {
  const getIcon = (category: string) => {
    const IconComponent = categoryIcons[category] || ShoppingCartIcon;
    return IconComponent;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
      </div>
      
      <div className="flow-root">
        <ul className="divide-y divide-gray-200">
          {mockTransactions.map((transaction) => {
            const IconComponent = getIcon(transaction.category);
            return (
              <li key={transaction.id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={clsx(
                        'h-10 w-10 rounded-full flex items-center justify-center',
                        transaction.type === 'income'
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      )}
                    >
                      <IconComponent
                        className={clsx(
                          'h-5 w-5',
                          transaction.type === 'income'
                            ? 'text-green-600'
                            : 'text-red-600'
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {transaction.category} • {new Date(transaction.date).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center">
                    <span
                      className={clsx(
                        'text-sm font-semibold',
                        transaction.type === 'income'
                          ? 'text-green-600'
                          : 'text-red-600'
                      )}
                    >
                      {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      
      <div className="px-6 py-3 bg-gray-50">
        <button className="text-sm text-primary-600 hover:text-primary-500 font-medium">
          View all transactions →
        </button>
      </div>
    </div>
  );
};

export default RecentTransactions;
