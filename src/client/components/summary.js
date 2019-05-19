import React from 'react';
import Button from './button';
import { api } from '../helpers/api';

const Summary = ({ todos, updateTodos }) => {
  /**
  * Base CSS class
  */
  const baseCls = 'summary'

  const remainingTodos = todos.filter(todo => {
    return todo.status !== 'complete' ? true : false;
  }).length;

  const displayText = (num) => {
    switch(num) {
      case 0:
        return `No tasks`;
      case 1:
        return `1 task remaining`;
      default:
        return `${num} tasks remaining`;
    }
  }

  const putTodos = (todos) => {
    updateTodos([...todos])
  }

  const onClickCompleteAll = todos => {
    todos.forEach(todo => {
      const newTodo = Object.assign({}, todo);
      newTodo.status = 'complete';

      api('PUT', newTodo);
    });
    const completedTodos = todos.map(todo => {
      const newTodo = Object.assign({}, todo);
      newTodo.status = 'complete';
      return newTodo;
    })
    
    putTodos(completedTodos);
  };

  const text = displayText(remainingTodos);

  return (
    <div className={baseCls}>
      {text}
      <Button text="Complete All" onClick={onClickCompleteAll.bind(this, todos)} />
    </div>
  )
}

export default Summary;