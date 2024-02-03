import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, act } from '@testing-library/react';
import { useScreenSize } from './useScreenSize';

// Mock the window.innerWidth and window.innerHeight
const mockWindowSize = { width: 1024, height: 768 };
Object.defineProperty(window, 'innerWidth', { value: mockWindowSize.width });
Object.defineProperty(window, 'innerHeight', { value: mockWindowSize.height });

describe('useScreenSize Hook', () => {
  // Mocking the resize event
  const mockResizeEvent = new Event('resize');
  window.dispatchEvent(mockResizeEvent);

  it('returns the initial window size', () => {
    // Render a component that uses the useScreenSize hook
    const ComponentUsingScreenSize = () => {
      const screenSize = useScreenSize();
      return <div>{`Width: ${ screenSize.width }, Height: ${ screenSize.height }`}</div>;
    };

    const { getByText } = render(<ComponentUsingScreenSize />);

    // Check if the initial window size is rendered
    expect(getByText(`Width: ${ mockWindowSize.width }, Height: ${ mockWindowSize.height }`)).toBeInTheDocument();
  });

  it('updates the window size on resize', () => {
    // Render a component that uses the useScreenSize hook
    const ComponentUsingScreenSize = () => {
      const screenSize = useScreenSize();
      return <div>{`Width: ${ screenSize.width }, Height: ${ screenSize.height }`}</div>;
    };

    const { getByText } = render(<ComponentUsingScreenSize />);

    // Change the window size
    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 800 });
      Object.defineProperty(window, 'innerHeight', { value: 600 });
      window.dispatchEvent(mockResizeEvent);
    });

    // Check if the updated window size is rendered
    expect(getByText('Width: 800, Height: 600')).toBeInTheDocument();
  });
});
