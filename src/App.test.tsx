import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('TodoList Component', () => {
  it('renders the todo list', () => {
    render(<App />);
    const main = screen.getByText('todos');
    expect(main).toBeInTheDocument();
  });
});
