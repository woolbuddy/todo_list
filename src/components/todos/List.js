import React from 'react';
import Todo from './Todo';

const List = ({ name, items, todoClick }) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        items.map( item => <Todo key={item.id} {...item} todoClick={todoClick} /> )
      }
    </ul>
  </div>
)

export default List;