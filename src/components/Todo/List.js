import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import propTypes from "prop-types";

export default function List({ todo, toggle, remove, edit }) {
  return todo.map((item) => {
    return (
      <div
        className={`todo-container ${item.complete && "completed"}`}
        key={item.id}
      >
        <p className={`${item.complete && "completed"}`}>{item.task}</p>
        <div className="todo-icon">
          {item.complete ? (
            <MdClose
              className="todo-icon-delete"
              onClick={() => toggle(item.id)}
            />
          ) : (
            <>
              <MdCheck
                className="todo-icon-check"
                onClick={() => toggle(item.id)}
              />
              <MdEdit
                className="todo-icon-edit"
                onClick={() => edit(item.id)}
              />
              <MdDelete
                className="todo-icon-delete"
                onClick={() => remove(item.id)}
              />
            </>
          )}
        </div>
      </div>
    );
  });
}

List.propTypes = {
  todo: propTypes.array,
  toggle: propTypes.func,
  delete: propTypes.func,
  edit: propTypes.func,
};
