import './styles.css';

import {Todo,TodoList} from './class'



const todoList = new TodoList();

const tarea = new Todo('Aprender js');
const tarea2 = new Todo('Aprender js');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log( todoList );
