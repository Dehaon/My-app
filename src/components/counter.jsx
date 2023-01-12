import React from "react";

const Counter = ({
  onDelete,
  onClickIncrement,
  onClickDecrement,
  id,
  ...rest
}) => {
  // console.log(rest);
  const { value } = rest;

  const formatValue = () => {
    return value === 0 ? "Пусто" : value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span className="h5">{rest.name}</span>
      <span className={getBageClasses()}>
        <h5>{formatValue()}</h5>
      </span>
      <button
        className="btn btn-primary m-2"
        onClick={() => onClickIncrement(id)}
      >
        +
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => onClickDecrement(id)}
      >
        -
      </button>
      <button className="btn btn-danger m-2" onClick={() => onDelete(id)}>
        Удалить
      </button>
    </div>
  );
};

export default Counter;
