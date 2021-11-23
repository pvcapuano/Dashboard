import { render, screen } from '@testing-library/react';
import App from './App';

test('Deve renderizar o componente', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
