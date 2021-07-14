import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import Input from "../../components/Form/Input";
import Button from "../../components/Button/Button";

import "./todo.scss";

export default function Todo() {
  useEffect(() => {
    document.title = "Artsy Collective | To Do";
  }, []);

  return (
    <div className="wrapper todo-wrapper">
      <div className="todo-list">
        <h1>To Do</h1>
        <form className="todo-form">
          <Input
            type="text"
            name="todo"
            classInput="todo-input"
            placeholder="Add todo"
            isSingle
          />
          <Button className="todo-button" isSmall>
            Add todo
          </Button>
        </form>
        <div className="todo-container">
          <div>Ini To Do</div>
          <div className="todo-icon">
            <FaCheck className="todo-icon-check" />
            <FaEdit className="todo-icon-edit" />
            <FaTrash className="todo-icon-delete" />
          </div>
        </div>
      </div>
      <div className="todo-done">
        <h1>Done</h1>
        <div className="todo-container">
          <div>Ini Done</div>
          <div className="todo-icon done">
            <FaTimes className="todo-icon-times" />
          </div>
        </div>
      </div>
    </div>
  );
}
