import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import { Recognitions } from '../recognitions';
import { AllContextProvidersMock } from 'src/mocks/all-context-providers-mock';

describe('Recognitions Component', () => {
 beforeEach(() => {
  // Setup portal target
  document.body.innerHTML = '<div id="pageWrapper"></div>';
 });

 it('should render the recognitions section with title and card', () => {
  render(
   <AllContextProvidersMock>
    <Recognitions />
   </AllContextProvidersMock>
  );

  // Check section title
  expect(screen.getByText('Awards')).toBeDefined();

  // Check card content (using English translations loaded in mock)
  expect(screen.getByText('Accessibility PR Powerhouses')).toBeDefined();
  expect(screen.getByText('Expedia Group - 2025 Accessibility Awards')).toBeDefined();

  // Check image alt text
  const image = screen.getByAltText('Accessibility PR Powerhouses');
  expect(image).toBeDefined();
 });

 it('should open the modal when clicking the card', () => {
  render(
   <AllContextProvidersMock>
    <Recognitions />
   </AllContextProvidersMock>
  );

  // Find the clickable card button
  const cardButton = screen.getByRole('button', { name: /See more/i });
  expect(cardButton).toBeDefined();

  // Click it to open modal
  fireEvent.click(cardButton);

  // Check if modal content appears
  // The modal uses a portal to #pageWrapper.
  // We expect the long description to be visible in the modal.
  const longDesc = "Last year, I was honored to receive the “Accessibility PR Powerhouses” recognition at Expedia Group’s 2025 Accessibility Awards for contributions that drove impactful accessibility improvements into production.";
  expect(screen.getByText(longDesc)).toBeDefined();

  // Check if close button exists in modal
  const closeButtons = screen.getAllByRole('button');
  // We expect at least the close button from the carousel now
  expect(closeButtons.length).toBeGreaterThan(1);
 });
});
