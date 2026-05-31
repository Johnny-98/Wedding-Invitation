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

    expect(screen.getByText(/Кликнете за да отговорите/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Ирен & Петър/i }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: /Отвори сватбената покана/i }),
    );

    expect(screen.getByTestId('wedding-countdown')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Обратно към плика/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Обратно към плика/i }));

    expect(screen.getByText(/Кликнете за да отговорите/i)).toBeInTheDocument();
  });
});
