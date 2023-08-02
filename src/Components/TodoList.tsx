import { TodoItem } from "./TodoItem";

import { ITodo } from "../type/data";
import React from "react";

interface ITodolistProps {
   items: ITodo[];
   removeTodo: (id: number) => void;
   toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodolistProps> = (props) => {
   const { items, toggleTodo, removeTodo } = props;

   return <>
      {items.map(todo => <TodoItem key={todo.id}
         toggleTodo={toggleTodo}
         removeTodo={removeTodo}
         {...todo} />)}
   </>
}


export { TodoList };