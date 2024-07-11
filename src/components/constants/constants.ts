import type { TItem, TFilters } from '../types/types.ts'

export const defaultList: TItem[] = [
  {
    id: 1,
    value: 'Тестовое задание',
    completed: false,
  },
  {
    id: 2,
    value: 'Прекрасный код',
    completed: true,
  },
  {
    id: 3,
    value: 'Покрытие тестами',
    completed: false,
  },
]

export const actions: TFilters[] = ['all', 'active', 'completed']
