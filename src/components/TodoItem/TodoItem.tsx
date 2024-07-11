import styles from './TodoItem.module.scss'

type TItemProps = {
  id: string | number
  value: string
  completed: boolean
  changeCompleted: (value: string | number) => void;
}

export function TodoItem ({ id, value, completed, changeCompleted }: TItemProps) {
  return (
    <li className={styles.todoItem}>
      <label className={styles.todoCheckbox}>
        <input
          className={completed ? styles.completed : ''}
          type="checkbox"
          checked={completed}
          onChange={() => changeCompleted(id)}
        />
        <span className={completed ? styles.completed : ''}>{value} {completed}</span>
      </label>
    </li>
  )
}
