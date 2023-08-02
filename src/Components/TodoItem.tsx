
import React from 'react';
import { ITodo } from '../type/data';
import './TodoItem.css';

interface ITodoItem extends ITodo {
   removeTodo: (id: number) => void;
   toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
   const { id, title, complete, removeTodo, toggleTodo } = props;

   return (
      <div className={`todo-item ${complete ? 'complete' : ''}`}>
         <input
            type="checkbox"
            checked={complete}
            onChange={() => toggleTodo(id)}
         />
         <span className="title">{title}</span>
         <button className="remove-button" onClick={() => removeTodo(id)}>
            X
         </button>
      </div>
   );
};

export { TodoItem };
