import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import App from './App';
import './i18n';

vi.mock('@/components/WeddingCountdown', () => ({
  WeddingCountdown: () => <div data-testid="wedding-countdown">Countdown</div>,
}));

describe('App', () => {
  it('renders the envelope and opens the invitation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Click to open/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Iren & Peter/i }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: /Open wedding invitation/i }),
    );

    expect(screen.getByTestId('wedding-countdown')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Back to envelope/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Back to envelope/i }));

    expect(screen.getByText(/Click to open/i)).toBeInTheDocument();
  });
});
