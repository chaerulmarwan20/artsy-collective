import React, { useState, useEffect } from "react";

import TodoForm from "../../components/Todo/Form";
import TodoList from "../../components/Todo/List";

import "./todo.scss";

export default function Todo() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "Football",
      complete: false,
    },
    {
      id: 2,
      task: "Futsal",
      complete: true,
    },
  ]);
  const [filterTodo, setFilterTodo] = useState([]);
  const [filter, setFilter] = useState("All");
  const [id, setId] = useState(null);
  const [input, setInput] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: todo.length + 1, task: input, complete: false }]);
    setInput("");
  };

  const handleToggle = (id) => {
    setTodo(
      todo.map((item) => {
        return item.id === id ? { ...item, complete: !item.complete } : item;
      })
    );
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setIsUpdate(true);
    const inputEdit = todo.filter((item) => item.id === id);
    console.log(inputEdit[0]);
    setId(inputEdit[0].id);
    setInput(inputEdit[0].task);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setTodo(
      todo.map((item) => {
        return item.id === id ? { ...item, task: input } : item;
      })
    );
    setIsUpdate(false);
    setId(null);
    setInput("");
  };

  useEffect(() => {
    document.title = "Artsy Collective | To Do";

    switch (filter) {
      case "Completed":
        setFilterTodo(todo.filter((item) => item.complete));
        break;
      case "Uncompleted":
        setFilterTodo(todo.filter((item) => !item.complete));
        break;
      default:
        setFilterTodo(todo);
        break;
    }
  }, [todo, filter]);

  return (
    <>
      <div className="wrapper todo-wrapper">
        <div className="todo-list">
          <h1>To Do List</h1>
          <TodoForm
            value={input}
            change={setInput}
            add={handleAdd}
            isUpdate={isUpdate}
            update={handleUpdate}
            filter={setFilter}
          />
          <TodoList
            todo={filterTodo}
            toggle={handleToggle}
            remove={handleDelete}
            edit={handleEdit}
          />
        </div>
      </div>
    </>
  );
}
