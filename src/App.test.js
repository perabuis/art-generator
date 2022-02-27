import { render, screen } from '@testing-library/react';
import App from './App';
import { useStore } from "./store";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
