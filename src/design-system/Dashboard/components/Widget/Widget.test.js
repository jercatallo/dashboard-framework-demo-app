import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Widget } from './Widget';
import { configurationMock } from '../../../../__mocks__';

describe('Widget Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders ListWidget correctly', () => {
    const widget = configurationMock.pokemon.columns[0].widgets[0];

    const { getByTestId } = render(<Widget widget={widget} />);

      // Assert that the ListWidget component is rendered
      expect(getByTestId(`list-widget-${ widget.title }`)).toBeInTheDocument();

      // Assert that the title, subtitle, and icon are rendered correctly
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

  it('renders NumberWidget correctly', () => {
    const widget = configurationMock.pokemon.columns[1].widgets[0];

    const { getByTestId } = render(<Widget widget={widget} />);

    // Assert that the NumberWidget component is rendered
    expect(getByTestId(`number-widget-${ widget.title }`)).toBeInTheDocument();
    expect(getByTestId(`number-widget-data-${ widget.data }`)).toBeInTheDocument();
    expect(getByTestId(`number-widget-title-${ widget.title }`)).toBeInTheDocument();
    expect(getByTestId(`number-widget-icon-${ widget.icon }-${ widget.title }`)).toBeInTheDocument();
  });

  it('handles unknown widget type gracefully', () => {
    const widget = {
      type: 'unknown',
    };

    // Silence the console.error output for the purpose of this test
    jest.spyOn(console, 'error').mockImplementation(() => {return {};});

    const { container } = render(<Widget widget={widget} />);

    // Assert that the component doesn't throw an error and renders some content
    expect(container).toBeInTheDocument();

    // Restore the console.error function to its original implementation
    jest.restoreAllMocks();
  });
});
