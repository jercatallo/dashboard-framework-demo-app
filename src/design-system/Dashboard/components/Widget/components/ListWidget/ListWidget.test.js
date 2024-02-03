import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { ListWidget } from './ListWidget';
import { configurationMock } from '../../../../../../__mocks__';

describe('ListWidget Component', () => {
  it('renders ListWidget correctly', () => {
    const widget = configurationMock.pokemon.columns[0].widgets[0];
    const { getByTestId } = render(<ListWidget widget={widget} />);

    // Assert that the ListWidget component is rendered
    expect(getByTestId(`list-widget-${ widget.title }`)).toBeInTheDocument();
    expect(getByTestId(`list-widget-items-${ widget.title }`)).toBeInTheDocument();
    expect(getByTestId(`list-widget-subtitle-${ widget.subtitle }`)).toBeInTheDocument();
    expect(getByTestId(`list-widget-title-${ widget.title }`)).toBeInTheDocument();

    // Loop through each list item and assert its content
    for (const [, data] of widget.data.entries()) {
      const listItem = getByTestId(`list-widget-item-${ data.name }`);
      expect(listItem).toBeInTheDocument();
      expect(listItem).toHaveTextContent(data.name);
    }
  });
});
