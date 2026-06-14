import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from './App';
import './i18n';

describe('App', () => {
  it('renders the invitation hero at the root route', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { name: /Ирен/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Моля потвърдете/i).length).toBeGreaterThan(0);
  });
});
