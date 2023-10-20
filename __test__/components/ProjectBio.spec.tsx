import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectBio from '@/components/ProjectBio';

describe('ProjectBio cpmponent', () => {
  beforeEach(() => {
    render(<ProjectBio project={mockProject} />);
  });

  const mockProject = {
    layout: '',
    title: 'Mock App',
    thumbnail: '/mock_app.png',
    cover: '',
    description: '',
    tech: [
      { name: 'Batman UI' },
      { name: 'Superman CSS' },
      { name: 'Spiderman UI' },
    ],
    features: [{ name: '', thumbnail: '' }],
    repo: '#',
    demo: '#',
    slug: '#',
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
