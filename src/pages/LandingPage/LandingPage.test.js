import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { LandingPage } from './LandingPage';

jest.mock('../../utils');

describe('LandingPage Component', () => {
  it('renders LandingPage component correctly', async() => {

    const { getByTestId } = render(<LandingPage />);

    expect(getByTestId('landing-page')).toBeInTheDocument();
  });
});
