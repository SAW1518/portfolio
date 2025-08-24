import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { ProjectsCarousel } from '../projects-carousel';
import { ImagesType } from 'src/components';
import {
  alertProvidersDefaultMock,
  AllContextProvidersMock,
} from 'src/mocks/all-context-providers-mock';

describe('ProjectsCarousel', () => {
  const mockSetShowCarouselIndex = vi.fn();
  const mockImages: ImagesType[] = [
    {
      companyName: 'Company 1',
      src: 'image1.jpg',
      titule: 'Project 1',
      urls: ['https://example.com/1'],
      descripcion: 'Description 1',
    },
    {
      companyName: 'Company 2',
      src: 'image2.jpg',
      titule: 'Project 2',
      urls: ['https://example.com/2'],
      descripcion: ['Description 2 - Part 1', 'Description 2 - Part 2'],
    },
  ];

  beforeEach(() => {
    document.body.innerHTML = `<div id="pageWrapper"></div>`;
    vi.clearAllMocks();
  });

  it('should render the carousel with the correct image and information', () => {
    const { getByAltText, getByText } = render(
      <AllContextProvidersMock>
        <ProjectsCarousel
          images={mockImages}
          index={0}
          setShowCarouselIndex={mockSetShowCarouselIndex}
        />
      </AllContextProvidersMock>,
    );

    expect(getByAltText('Company 1')).toBeDefined();
    expect(getByText('Project 1')).toBeDefined();
    expect(getByText('Description 1')).toBeDefined();
    expect(getByText('https://example.com/1')).toBeDefined();
  });

  it('should render multiple descriptions when descripcion is an array', () => {
    const { getByText } = render(
      <AllContextProvidersMock>
        <ProjectsCarousel
          images={mockImages}
          index={1}
          setShowCarouselIndex={mockSetShowCarouselIndex}
        />
      </AllContextProvidersMock>,
    );

    expect(getByText('Description 2 - Part 1')).toBeDefined();
    expect(getByText('Description 2 - Part 2')).toBeDefined();
  });

  it('should call setShowCarouselIndex when clicking the Next button', () => {
    const { getAllByRole } = render(
      <AllContextProvidersMock>
        <ProjectsCarousel
          images={mockImages}
          index={0}
          setShowCarouselIndex={mockSetShowCarouselIndex}
        />
      </AllContextProvidersMock>,
    );

    fireEvent.click(getAllByRole('button')[2]);
    expect(mockSetShowCarouselIndex).toHaveBeenCalledWith(1);
  });

  it('should call setShowCarouselIndex when clicking the Back button', () => {
    const { getAllByRole } = render(
      <AllContextProvidersMock>
        <ProjectsCarousel
          images={mockImages}
          index={1}
          setShowCarouselIndex={mockSetShowCarouselIndex}
        />
      </AllContextProvidersMock>,
    );

    fireEvent.click(getAllByRole('button')[1]);

    expect(mockSetShowCarouselIndex).toHaveBeenCalledWith(0);
  });

  it('should close the carousel when clicking the close button', () => {
    const alertProvidersCloseMock = vi.fn();
    const { getAllByRole } = render(
      <AllContextProvidersMock
        alertProvidersMock={{
          ...alertProvidersDefaultMock,
          closeCarousel: alertProvidersCloseMock,
        }}
      >
        <ProjectsCarousel
          images={mockImages}
          index={0}
          setShowCarouselIndex={mockSetShowCarouselIndex}
        />
      </AllContextProvidersMock>,
    );

    fireEvent.click(getAllByRole('button')[0]);

    expect(mockSetShowCarouselIndex).toHaveBeenCalledWith(null);
    expect(alertProvidersCloseMock).toHaveBeenCalled();
  });

  it('should render the correct translation for index marker', () => {
    const { getByText } = render(
      <AllContextProvidersMock>
        <ProjectsCarousel
          images={mockImages}
          index={0}
          setShowCarouselIndex={mockSetShowCarouselIndex}
        />
      </AllContextProvidersMock>,
    );

    expect(getByText('1 of 2')).toBeDefined();
  });
});
