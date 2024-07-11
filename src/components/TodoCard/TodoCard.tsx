/**
 * Libs
 */
import { useMemo, useState } from 'react'

/**
 * Utils
 */
import { defaultList } from '../constants/constants'
import styles from './TodoCard.module.scss'

/**
 * Components
 */
import { TodoList } from '../TodoList/TodoList'
import { TodoActions } from '../TodoActions/TodoActions'
import { TFilters } from '../types/types'

export function TodoCard() {
  const [list, setList] = useState(defaultList)
  const [activeFilter, setActiveFilter] = useState<TFilters>('all');

  const filteredTodos = useMemo(() => {
    return list.filter(item => {
      if (activeFilter === 'active') return !item.completed;
      if (activeFilter === 'completed') return item.completed;
      return true;
    });
  }, [list, activeFilter]);

  return (
    <>
      <div className={styles.container}>
        <TodoList
          list={filteredTodos}
          setList={setList}
        />
        <TodoActions
          list={list}
          setList={setList}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </>
  )
}
