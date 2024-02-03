import React from 'react';

export const ListWidget = ({ widget }) => {
    const data = widget.data;

    return (
        <div data-testid={`list-widget-${ widget.title }`} className='border-solid bg-blue-100  border-gray-400 rounded-2xl border-2 p-5'>
            <h3 data-testid={`list-widget-title-${ widget.title }`} className='text-2xl font-heading text-blue-500 flex items-center gap-2 font-medium'>
                <img src={widget.icon} style={{ width: '25px', height: '25px' }} alt={widget.title}></img> {widget.title}
            </h3>
            <p data-testid={`list-widget-subtitle-${ widget.subtitle }`} className='text-xl'>{widget.subtitle}</p>
            <ul data-testid={`list-widget-items-${ widget.title }`} className='px-1 my-2'>
                {data && data.map((item, index) => (
                    <li data-testid={`list-widget-item-${ item.name }`} style={{ borderBottom: '1px solid gray' }} className='text-md list-inside text-lg px-4 py-1' key={index}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
