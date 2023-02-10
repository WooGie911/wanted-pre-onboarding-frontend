import React, { useState } from "react";
import styled from "styled-components";
import Apis from "../shared/Apis";

const Form = (Props) => {
  const [input, setInput] = useState({ comment: "" });

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const createTodo = async (payload) => {
    const data = await Apis.createTodoAX(payload);
    if (data.status === 201) {
      Props.setTodos([...Props.todos, data.data]);
      setInput({ comment: "" });
    }
  };

  return (
    <Div>
      <input
        data-testid="new-todo-input"
        type="text"
        name="comment"
        value={input.comment || ""}
        onChange={onChangeHandlerInput}
        placeholder="추가 할 내용을 입력해주세요."
        onKeyUp={(e) => {
          if (e.key === "Enter") createTodo({ todo: input.comment });
        }}
      />
      <button
        data-testid="new-todo-add-button"
        onClick={() => {
          createTodo({ todo: input.comment });
        }}
      >
        추가
      </button>
    </Div>
  );
};

export default Form;

const Div = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.22);
`;
