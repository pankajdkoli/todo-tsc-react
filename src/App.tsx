import React, { useState } from "react";

import InputField from "./components/InputField";
import "./App.css";
import { Todo } from "./components/model";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      // have something in todo then goe next to setTodos
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]); //get from todo model id todo isdone these are
      setTodo(""); // after done submit input file input filds goe empty
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Add Todo </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
