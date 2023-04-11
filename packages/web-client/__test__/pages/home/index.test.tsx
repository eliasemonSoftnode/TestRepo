import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../../../src/pages/home';

describe('Describe home page', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
  });
});
