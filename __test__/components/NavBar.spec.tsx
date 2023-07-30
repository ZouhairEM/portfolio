import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '@/components/NavBar';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

beforeEach(() => {
  useRouter.mockImplementation(() => ({
    pathname: '/',
    push: jest.fn(),
  }));
  render(<NavBar />);
});

describe('NavBar component', () => {
  it('should toggle between hamburger and close icons when button is clicked', () => {
    const hamburgerIcon = screen.getByRole('hamburger-icon');
    expect(hamburgerIcon).toBeVisible();

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeVisible();

    fireEvent.click(toggleButton);
    expect(hamburgerIcon).toBeVisible();
  });
});
