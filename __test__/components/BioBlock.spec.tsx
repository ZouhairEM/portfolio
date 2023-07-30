import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BioBlock from '@/components/BioBlock';

describe('BioBlock component', () => {
  it('should render the name in the BioBlock', () => {
    render(<BioBlock />);
    const firstName = screen.getByText('Zouhair');
    const surName = screen.getByText('El-Mariami');
    expect(firstName).toBeInTheDocument();
    expect(surName).toBeInTheDocument();
  });
});
