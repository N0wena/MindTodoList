import styles from './App.module.scss'
import { TodoCard } from './components/TodoCard/TodoCard.tsx'

function App() {
  return (
    <main className={styles.view}>
      <h1>todos</h1>
      <TodoCard />
    </main>
  )
}

export default App
