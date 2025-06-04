import React, { useState } from 'react';
import type { Todo } from './todoList';

export interface ToDoUpdateProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoInput = ({ setTodoList, todoList }: ToDoUpdateProps) => {
  const [inputValue, setInputValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo: Todo = {
      id: todoList.length + 1,
      text: inputValue,
      status: '진행전',
    };

    setTodoList([...todoList, newTodo]);
    setInputValue(' ');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={inputValue}
        className="border border-black"
      />
      <button type="submit" className="border border-black">
        제출
      </button>
    </form>
  );
};
