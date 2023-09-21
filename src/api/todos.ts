import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const getCompletedTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}&completed=true`);
};

// Add more methods here