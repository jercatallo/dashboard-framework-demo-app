import React from 'react';
import { Column } from './components';

export const Dashboard = ({ configuration }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 p-2 justify-center'>
      {configuration && configuration.columns && configuration.columns.map((column, index) => (
        <Column key={`${ column.heading }-${ index }`} column={column} />
      ))}
    </div>
  );
};
