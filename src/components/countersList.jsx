import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 1, name: "Ложка" },
    { id: 2, value: 1, name: "Вилка" },
    { id: 3, value: 1, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  // Функция прибавления единицы к каунтеру
  const handleIncrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, value: (counter.value += 1) };
      }
      return counter;
    });
    setCounters(newCounters);
  };

  // Функция убавления единицы от каунтера
  const handleDecrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, value: (counter.value -= 1) };
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    console.log("handle Reset");
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onClickIncrement={handleIncrement}
          onClickDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
