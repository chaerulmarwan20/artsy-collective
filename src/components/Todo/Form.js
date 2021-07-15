import React from "react";
import propTypes from "prop-types";

import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import Button from "../../components/Button/Button";

export default function Form({ value, change, add, isUpdate, update, filter }) {
  const listFilter = ["All", "Completed", "Uncompleted"];

  return (
    <>
      <form className="todo-form" onSubmit={isUpdate ? update : add}>
        <div className="todo-input-wrapper">
          <Input
            type="text"
            name="task"
            classInput="todo-input"
            placeholder={`${isUpdate ? "Update todo" : "Add todo"}`}
            value={value}
            onChange={(e) => change(e.target.value)}
            isSingle
          />
          <Button type="submit" className="todo-button" isSmall>
            {isUpdate ? "Update" : "Add"}
          </Button>
        </div>
      </form>
      <Select
        className="select-filter"
        value="All"
        list={listFilter}
        onChange={(e) => filter(e.target.value)}
      />
    </>
  );
}

Form.propTypes = {
  change: propTypes.func,
  add: propTypes.func,
  value: propTypes.string,
  isUpdate: propTypes.bool,
  edit: propTypes.func,
  filter: propTypes.func,
};
