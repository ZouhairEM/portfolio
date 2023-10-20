import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LearnedSkill from '@/components/LearnedSkill';

describe('LearnedSkill component', () => {
  it('should render a learned skill', () => {
    const mockSkill = {
      layout: '',
      skill: 'Testing',
      thumbnail: 'testing.png',
    };

    render(
      <LearnedSkill
        key={mockSkill.skill}
        skill={mockSkill.skill}
        thumbnail={mockSkill.thumbnail}
      />
    );

    const renderedSkill = {
      name: screen.getAllByText('Testing')[0],
      img: screen
        .getByAltText('Testing')
        .parentElement?.querySelector('img'),
    };

    expect(renderedSkill.name).toHaveTextContent('Testing');
    expect(renderedSkill.img).toBeVisible();
  });
});
