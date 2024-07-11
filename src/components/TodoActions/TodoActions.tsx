/**
 * Libs
 */
import { Dispatch, SetStateAction, useMemo } from 'react';

/**
 * Utils
 */
import { TFilters, TItem } from '../types/types';
import styles from './TodoActions.module.scss';
import { actions } from '../constants/constants.ts'


type TActionsProps = {
  list: TItem[];
  setList: Dispatch<SetStateAction<TItem[]>>;
  activeFilter: TFilters;
  setActiveFilter: Dispatch<SetStateAction<TFilters>>;
}

export function TodoActions ({
  list,
  setList,
  activeFilter,
  setActiveFilter
}: TActionsProps) {
  const uncompletedTasks = useMemo(
    () => list.filter((task) => !task.completed),
    [list]
  );


  function changeFilter(value: TFilters) {
    setActiveFilter(value);
  }


  function clearCompleted() {
    setList((prev: TItem[]) => prev.filter((task) => !task.completed));
  }

  return (
    <div className={styles.todoFooter}>
      <span>{uncompletedTasks.length} items left</span>

      <ul className={styles.todoFilters}>
        {actions.map((value) => (
          <li
            className={value === activeFilter ? styles.active : ''}
            key={value}
            onClick={() => changeFilter(value)}
          >
            {value}
          </li>
        ))}
      </ul>

      <span className={styles.clearBtn} onClick={clearCompleted}>Clear completed</span>
    </div>
  )
}
