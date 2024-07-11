import { render, fireEvent, getByTestId } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TodoActions } from './TodoActions';


describe('TodoActions Component', () => {
  it('filter exist', () => {
    const { container } = render(
      <TodoActions
        list={[]}
        setList={() => { }}
        activeFilter={'all'}
        setActiveFilter={() => { }}
        />
    );
    const radio = getByTestId(container, 'all');
    expect(radio).toHaveTextContent('all');
  });

  it('filter changed', () => {
    const { container } = render(
      <TodoActions
        list={[]}
        setList={() => { }}
        activeFilter={'all'}
        setActiveFilter={() => { }}
        />
    );
    const radioActive = getByTestId(container, 'active');
    fireEvent.click(radioActive);
    expect(radioActive).toHaveTextContent('active');
    
    const radioCompleted = getByTestId(container, 'completed');
    fireEvent.click(radioCompleted);
    expect(radioCompleted).toHaveTextContent('completed');
  });
});
