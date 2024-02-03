import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { NumberWidget } from './NumberWidget';
import { configurationMock } from '../../../../../../__mocks__';

describe('NumberWidget Component', () => {
  it('renders NumberWidget correctly', () => {
    const widget = configurationMock.pokemon.columns[1].widgets[0];

    const { getByTestId } = render(<NumberWidget widget={widget} />);

    // Assert that the NumberWidget component is rendered
    expect(getByTestId(`number-widget-${ widget.title }`)).toBeInTheDocument();
    expect(getByTestId(`number-widget-data-${ widget.data }`)).toBeInTheDocument();
    expect(getByTestId(`number-widget-title-${ widget.title }`)).toBeInTheDocument();
    expect(getByTestId(`number-widget-icon-${ widget.icon }-${ widget.title }`)).toBeInTheDocument();
  });
});
