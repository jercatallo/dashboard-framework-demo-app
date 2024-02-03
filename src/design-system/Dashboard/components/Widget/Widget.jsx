import React, { useMemo } from 'react';
import { ListWidget, NumberWidget } from './components';

export const Widget = ({ widget }) => {
  const WidgetObject = useMemo(() => {
    return {
      'list': <ListWidget widget={widget} />,
      'number': <NumberWidget widget={widget} />,
    };
  },[widget]);
  const WidgetWdith = useMemo(() => {
    return {
      'list': '100%',
      'number': 'auto',
    };
  },[widget]);

  return (
    <div data-testid={`widget-container-${ widget.title }`} style={{ width: WidgetWdith[widget.type] }}>
      {WidgetObject[widget.type]}
    </div>
  );
};
