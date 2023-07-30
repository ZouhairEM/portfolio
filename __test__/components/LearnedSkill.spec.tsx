import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LearnedSkill from '@/components/LearnedSkill';

describe('LearnedSkill component', () => {
  it('should render a learned skill', () => {
    const mockSkill = {
      skill: 'Testing',
      img: '/testing.png',
      alt: 'Testing skill',
    };

    render(
      <LearnedSkill
        skill={mockSkill.skill}
        img={mockSkill.img}
        alt={mockSkill.alt}
      />
    );

    const renderedSkill = {
      name: screen.getAllByText('Testing')[0],
      alt: screen.getByAltText('Testing skill'),
      img: screen
        .getByAltText('Testing skill')
        .parentElement?.querySelector('img'),
    };

    expect(renderedSkill.name).toHaveTextContent('Testing');
    expect(renderedSkill.img).toBeVisible();
    expect(renderedSkill.alt).toHaveAttribute('alt', 'Testing skill');
  });
});
