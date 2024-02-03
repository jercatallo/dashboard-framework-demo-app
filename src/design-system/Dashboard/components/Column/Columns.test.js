import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Column } from './Column';
import { useScreenSize } from '../../hooks';
import { configurationMock } from '../../../../__mocks__';

// Mock the useScreenSize hook
jest.mock('../../hooks/useScreenSize', () => ({
  __esModule: true,
  useScreenSize: jest.fn(),
}));

describe('Column Component', () => {
  const mockScreenSize = { width: 1280, height: 800 };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });

  it('renders Column component correctly', () => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

    // Mock useScreenSize hook to return a specific screen size
    useScreenSize.mockReturnValue(mockScreenSize);

    const columnData = configurationMock.pokemon.columns[0];

    const { getByTestId } = render(<Column column={columnData} />);

    // Check if the column is rendered
    expect(getByTestId('column')).toBeInTheDocument();
    expect(getByTestId(`column-heading-${columnData.heading}`)).toBeInTheDocument();
    expect(getByTestId(`column-widget-container-${columnData.heading}`)).toBeInTheDocument();

    const findNumberWidgets = columnData.widgets.filter((e) => e.type === 'number');
    const findListWidgets = columnData.widgets.filter((e) => e.type === 'list');
    if (findNumberWidgets) {
      for (const numberWidget of findNumberWidgets) {
        expect(getByTestId(`number-widget-${numberWidget.title}`)).toBeInTheDocument();
        expect(getByTestId(`number-widget-data-${numberWidget.data}`)).toBeInTheDocument();
        expect(getByTestId(`number-widget-title-${numberWidget.title}`)).toBeInTheDocument();
        expect(getByTestId(`number-widget-icon-${numberWidget.icon}-${numberWidget.title}`)).toBeInTheDocument();
      }
    }
    if (findListWidgets) {
      for (const listWidget of findListWidgets) {
        // Assert that the ListWidget component is rendered
        expect(getByTestId(`list-widget-${listWidget.title}`)).toBeInTheDocument();
        expect(getByTestId(`list-widget-items-${listWidget.title}`)).toBeInTheDocument();
        expect(getByTestId(`list-widget-subtitle-${listWidget.subtitle}`)).toBeInTheDocument();
        expect(getByTestId(`list-widget-title-${listWidget.title}`)).toBeInTheDocument();

        // Loop through each list item and assert its content
        for (const [, data] of listWidget.data.entries()) {
          const listItem = getByTestId(`list-widget-item-${data.name}`);
          expect(listItem).toBeInTheDocument();
          expect(listItem).toHaveTextContent(data.name);
        }
      }
    }
  });
});
