import React from "react";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // does not return any th
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={todo}
        placeholder="enter task"
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input__submit" type="submit">
        submit
      </button>
      <br></br>
      <span>
        Input Form<h1> {todo}</h1>
      </span>
    </form>
  );
};

export default InputField;
