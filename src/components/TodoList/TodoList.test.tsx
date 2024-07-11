import { render, fireEvent, getByTestId } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TodoList } from './TodoList';


describe('TodoList Component', () => {
  it('renders the todo list', () => {
    const { container } = render(<TodoList list={[]} setList={() => { }} />);
    const input = getByTestId(container, 'input');
    expect(input).toBeInTheDocument();
  });

  it('new text input', async () => {
    const { container } = render(<TodoList list={[]} setList={() => { }} />);

    const input = getByTestId(container, 'input');
    await fireEvent.change(input, { target: { value: 'New Todo' } });

    expect((input as HTMLInputElement).value).toBe('New Todo');
  });

  it('fired enter', async () => {
    const initialList = [
      { id: 1, value: 'Todo 1', completed: false },
      { id: 2, value: 'Todo 2', completed: false },
      { id: 3, value: 'Todo 3', completed: true }
    ];
    const setList = vi.fn();

    const { container } = render(<TodoList list={initialList} setList={setList} />);

    const input = getByTestId(container, 'input');
    await fireEvent.change(input, { target: { value: 'New Todo' } });
    input.focus()
    // userEvent.keyboard('{enter}');
    await fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });
    expect(setList.mock.calls.length).toBe(1);
  });
});
