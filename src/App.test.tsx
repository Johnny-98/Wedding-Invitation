import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import App from './App';
import { store } from './store';

vi.mock('@/components/WeddingCountdown', () => ({
  WeddingCountdown: () => <div data-testid="wedding-countdown">Countdown</div>,
}));

describe('App', () => {
  it('renders the wedding page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: /Peter Dzhonov/i })).toBeInTheDocument();
    expect(screen.getByText(/Iren Meshineva/i)).toBeInTheDocument();
    expect(screen.getByTestId('wedding-countdown')).toBeInTheDocument();
  });
});
