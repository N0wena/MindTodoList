export type TItem = {
  id: number | string;
  value: string;
  completed: boolean;
}

export type TFilters = 'all' | 'active' | 'completed'
