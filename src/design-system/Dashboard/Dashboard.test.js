import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { configurationMock } from '../../__mocks__';

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Dashboard configuration={{ columns: [] }} />);
    expect(container).toBeDefined();
  });

  it('renders columns based on the configuration prop', () => {
    const configuration = configurationMock.pokemon;

    const { getAllByTestId, getByTestId } = render(<Dashboard configuration={configuration} />);
    const columns = getAllByTestId('column');
    expect(columns).toHaveLength(configuration.columns.length);

    for (const column of configuration.columns) {


      const findNumberWidgets = column.widgets.filter((e) => e.type === 'number');
      const findListWidgets = column.widgets.filter((e) => e.type === 'list');
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

    }
  });
});
