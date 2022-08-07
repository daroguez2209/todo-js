import './styles.css';
import { Todo, TodoList } from './classes' //se deja solo ./ classes ya que se buscará el index.js directamente
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();


todoList.todos.forEach( todo => crearTodoHtml(todo));

console.log('todos', todoList.todos);


