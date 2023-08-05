import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectDetails from '@/pages/[project_details]';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('ProjectDetails component', () => {
  beforeEach(() => {
    const mockQueryData = {
      title: '"Project 1"',
      details: JSON.stringify({
        cover: '/project1_cover.png',
        description: 'Details about project 1',
        tech: ['Tech 1', 'Tech 2'],
        features: [
          {
            title: 'Feature 1',
            icon: '/feature1_icon.png',
          },
          {
            title: 'Feature 2',
            icon: '/feature2_icon.png',
          },
        ],
        demo: 'https://project1demo.co',
        repo: 'https://project1repo.co',
      }),
    };

    const { title, details } = mockQueryData;

    useRouter.mockImplementation(() => ({
      query: {
        title: title,
        details,
      },
    }));

    render(<ProjectDetails />);
  });

  it('should render project details correctly', () => {
    const titleElement = screen.getByText('Project 1');
    const description = screen.getByText('Details about project 1');
    const project_tech1 = screen.getByText('Tech 1');

    expect(titleElement).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(project_tech1).toBeInTheDocument();
  });

  it('should have working external links', () => {
    const githubLink = screen.getByText('Github');
    const liveLink = screen.getByText('Live');

    expect(githubLink).toHaveAttribute('href', 'https://project1repo.co');
    expect(liveLink).toHaveAttribute('href', 'https://project1demo.co');
  });
});
