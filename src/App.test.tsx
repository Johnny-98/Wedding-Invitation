import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import App from './App';
import './i18n';
import { store } from './store';

vi.mock('@/components/WeddingCountdown', () => ({
  WeddingCountdown: () => <div data-testid="wedding-countdown">Countdown</div>,
}));

describe('App', () => {
  it('renders the envelope and opens the invitation', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/Click to open/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Iren/i })).toBeInTheDocument();
    expect(screen.getByText(/Peter/i)).toBeInTheDocument();

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
