import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectBio from '@/components/ProjectBio';

describe('ProjectBio cpmponent', () => {
  beforeEach(() => {
    render(<ProjectBio project={mockProject} />);
  });

  const mockProject = {
    title: 'Mock App',
    thumbnail: '/mock_app.png',
    tech: ['Batman UI', 'Superman CSS', 'Spiderman.JS'],
    repo: '#',
    demo: '#',
  };

  it('should render a project', () => {
    const renderedProject = {
      title: screen.getAllByText('Mock App'),
      thumbnail: screen
        .getByAltText('Mock App')
        .parentElement?.querySelector('img'),
      tech: screen.getByText('Batman UI').parentElement?.querySelectorAll('p'),
    };

    expect(renderedProject.title[0]).toHaveTextContent('Mock App');
    expect(renderedProject.thumbnail).toBeVisible();
    expect(renderedProject.tech?.length).toBe(3);
  });
});
