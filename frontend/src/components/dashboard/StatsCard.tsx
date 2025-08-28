import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBgColor?: string;
  iconColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconBgColor = 'bg-primary-500',
  iconColor = 'text-white',
}) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-200 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`p-3 rounded-lg ${iconBgColor}`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                {change && (
                  <div
                    className={clsx(
                      'ml-2 flex items-baseline text-sm font-semibold',
                      changeType === 'increase'
                        ? 'text-green-600'
                        : changeType === 'decrease'
                        ? 'text-red-600'
                        : 'text-gray-500'
                    )}
                  >
                    {changeType === 'increase' && (
                      <ArrowUpIcon className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                    )}
                    {changeType === 'decrease' && (
                      <ArrowDownIcon className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                    )}
                    <span className="sr-only">
                      {changeType === 'increase' ? 'Increased' : 'Decreased'} by
                    </span>
                    {change}
                  </div>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
