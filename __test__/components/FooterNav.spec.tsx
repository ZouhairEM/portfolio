import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterNav from '@/components/FooterNav';

describe('FooterNav cpmponent', () => {
  const currentYear = new Date().getFullYear();

  it('should render the footer info', () => {
    render(<FooterNav />);
    const name = screen.getByText(`Zouhair El-Mariami ${currentYear} ©`);
    expect(name).toBeInTheDocument();
  });
});
