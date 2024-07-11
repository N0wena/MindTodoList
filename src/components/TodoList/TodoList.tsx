/**
 * Libs
 */
import { Dispatch, SetStateAction, useState } from 'react';
import { v4 } from 'uuid';

/**
 * Utils
 */
// import styles from './TodoList.module.scss'
import type { TItem } from '../types/types'
import styles from './TodoList.module.scss'

/**
 * Components
 */
import { TodoItem } from '../TodoItem/TodoItem'
import { ArrowIcon } from '../icons/arrow.tsx';

type TListProps = {
  list: TItem[]
  setList: Dispatch<SetStateAction<TItem[]>>;
}

export function TodoList ({ list, setList }: TListProps) {
  const [inputValue, setInputValue] = useState('');

  function addNewTodo(value: string) {
    const newTodoItem: TItem = {
      id: v4(),
      value: value,
      completed: false,
    }

    setList((prev: TItem[]) => [...prev, newTodoItem])
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue) {
      addNewTodo(inputValue)
      setInputValue('')
    }
  }
  
  function changeCompleted(id: number | string) {
    setList((prev: TItem[]) => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
  }

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.iconWrapper}>
          <ArrowIcon />
        </div>
        <input
          value={inputValue}
          placeholder='What needs to be done?'
          onKeyDown={handleKeyDown}
          onChange={e => setInputValue(e.target.value)}
        />
      </div>

      {list.map((item: TItem) => (
        <TodoItem
          key={item.id}
          id={item.id}
          value={item.value}
          completed={item.completed}
          changeCompleted={changeCompleted}
        />
      ))}
    </>
  )
}
