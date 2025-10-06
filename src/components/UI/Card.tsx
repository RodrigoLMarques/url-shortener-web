import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  actions,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          )}
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )}
        </div>
      )}
      
      <div className="mb-4">
        {children}
      </div>
      
      {actions && (
        <div className="flex justify-end space-x-3">
          {actions}
        </div>
      )}
    </div>
  );
};

export default Card;
