import React from 'react';
import { Widget } from '../Widget';
import { useScreenSize } from '../../hooks';

export const Column = ({ column }) => {
  const screenSize = useScreenSize();

  return (
    <div data-testid='column' className='border-solid border-gray-400 border-2 rounded-lg p-6 m-4 grid' style={{ gridColumn: `span ${ screenSize.width >= 1280 && column ? column.size : 12 }` }}>
      <h2 data-testid={`column-heading-${ column && column.heading }`} className='font-bold text-3xl pb-5 font-heading flex items-center gap-2 mb-auto'><img src={column && column.icon} style={{ width: '25px', height: '25px' }}></img>{column && column.heading}</h2>
      <div data-testid={`column-widget-container-${column && column.heading}`} className='flex flex-wrap gap-5 justify-around'>
        {column && column.widgets && column.widgets.map((widget, index) => (
          <Widget key={`${ widget.title }-${ index }`} widget={widget} />
        ))}
      </div>
    </div>
  );
};
