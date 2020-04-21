import React from 'react';
import AppHeader from "./Components/app-header/app-header";
import TodoList from "./Components/todo-list";
import SearchPanel from "./Components/search-panel";
import './Components/app/app.css'
import ItemStatusFilter from "./Components/item-status-filter";
import ItemAddForm from "./Components/item-add-form";

function App() {

    const todoData = [
        {label: 'Hello', important: false, id:1},
        {label: 'I will be secseful', important: true , id:2},
        {label: 'Learn', important: false , id:3},

    ]
  return (
    <div className="todo-app">
      <AppHeader />
      <div className={'top-panel d-flex'}>
      <SearchPanel />
      <ItemStatusFilter />
      </div>

      <TodoList  todos={todoData}/>
      <ItemAddForm />
    </div>
  );
}

export default App;
