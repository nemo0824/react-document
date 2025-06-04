import React, { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoElement } from './TodoElement';

export interface Todo {
  id: number;
  text: string;
  status: '진행전' | '진행중' | '완료';
}
export const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const yetList = todoList.filter((todo) => todo.status === '진행전');
  const ingList = todoList.filter((todo) => todo.status === '진행중');
  const finishList = todoList.filter((todo) => todo.status === '완료');
  return (
    <div>
      <h1>ToDoList</h1>
      <TodoInput setTodoList={setTodoList} todoList={todoList} />
      <div className="flex">
        <ul>
          {yetList.map((todo) => (
            <TodoElement todo={todo} key={todo.id} setTodoList={setTodoList} />
          ))}
        </ul>
        <ul>
          {ingList.map((todo) => (
            <TodoElement todo={todo} key={todo.id} setTodoList={setTodoList} />
          ))}
        </ul>
        <ul>
          {finishList.map((todo) => (
            <TodoElement todo={todo} key={todo.id} setTodoList={setTodoList} />
          ))}
        </ul>
      </div>
    </div>
  );
};
