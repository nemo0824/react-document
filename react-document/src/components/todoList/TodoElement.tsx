import React from 'react';
import type { Todo } from './todoList';

interface TodoElementProps {
  todo: Todo;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoElement = ({ todo, setTodoList }: TodoElementProps) => {
  const todoStatus = ['진행전', '진행중', '완료'] as const;
  const onUpdateStatus = (newStatus: Todo['status']) => {
    const updatedTodo = { ...todo, status: newStatus };
    setTodoList((prev) =>
      prev.map((t) => (t.id === todo.id ? updatedTodo : t))
    );
  };
  return (
    <li>
      {todo.id} {todo.text}
      {todoStatus
        .filter((status) => status !== todo.status)
        .map((status) => (
          <button onClick={() => onUpdateStatus(status)}>{status}</button>
        ))}
    </li>
  );
};
