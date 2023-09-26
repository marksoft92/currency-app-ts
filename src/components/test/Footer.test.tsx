import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('Footer component', () => {
  test('should render the article count', () => {
    render(<Footer />);
    const articleCountElement = screen.getByText('Article count: ');
    expect(articleCountElement).toBeInTheDocument();
  });

  test('should render the current time', () => {
    render(<Footer />);
    const currentTimeElement = screen.getByText('Current time: ');
    expect(currentTimeElement).toBeInTheDocument();
  });
});
