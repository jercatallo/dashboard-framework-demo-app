import React, { useMemo } from 'react';

export const NumberWidget = ({ widget }) => {
  const { data } = widget;
  const colorVariants = ['bg-blue-400','bg-red-400','bg-green-400']

  const bgColor = useMemo(()=> {
    return colorVariants[Math.floor(Math.random() * colorVariants.length)];
  },[])
  
  return (
    <div data-testid={`number-widget-${ widget.title }`} className={`text-center text-white rounded-2xl border-solid border-silver border-2 grid items-center ${bgColor}`} style={{ height: '300px', width: '300px' }}>
      <div>
        <p data-testid={`number-widget-data-${ widget.data }`} className='text-3xl'>{data}</p>

        <h3 data-testid={`number-widget-title-${ widget.title }`} className=' text-xl text-white'>{widget.title}</h3>
        <img data-testid={`number-widget-icon-${ widget.icon }-${ widget.title }`} src={widget.icon} className='mx-auto mt-5' style={{ width: '50px', height: '50px' }}></img>
      </div>

    </div>
  );
};
