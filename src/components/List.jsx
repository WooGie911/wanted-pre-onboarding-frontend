import React, { useState } from "react";
import styled from "styled-components";
import Apis from "../shared/Apis";

const List = (Props) => {
  const [editState, setEditState] = useState({ comment: "", isdone: true });
  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setEditState({ ...editState, [name]: value });
  };

  const updateTodo = async (payload) => {
    await Apis.updateTodoAX(payload);
    Props.getTodos();
    setEditState({ ...editState, isdone: true });
  };
  const deleteTodo = async (payload) => {
    await Apis.deleteTodosAX(payload);
    Props.getTodos();
  };

  return (
    <Div>
      {editState.isdone ? (
        <li>
          <label>
            <input
              type="checkbox"
              defaultChecked={Props.todo.isCompleted}
              onClick={() => {
                updateTodo({
                  id: Props.todo.id,
                  body: {
                    todo: Props.todo.todo,
                    isCompleted: !Props.todo.isCompleted,
                  },
                });
              }}
            />
            <span>{Props.todo.todo}</span>
          </label>
          <button
            data-testid="modify-button"
            onClick={() => {
              setEditState({ ...editState, isdone: false });
            }}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => {
              deleteTodo(Props.todo.id);
            }}
          >
            삭제
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input
              type="checkbox"
              defaultChecked={Props.todo.isCompleted}
              onClick={() => {
                updateTodo({
                  id: Props.todo.id,
                  body: {
                    todo: Props.todo.todo,
                    isCompleted: !Props.todo.isCompleted,
                  },
                });
              }}
            />
          </label>
          <input
            data-testid="modify-input"
            type="text"
            name="comment"
            value={editState.comment || ""}
            onChange={onChangeHandlerInput}
          />
          <button
            data-testid="submit-button"
            onClick={() => {
              updateTodo({
                id: Props.todo.id,
                body: {
                  todo: editState.comment,
                  isCompleted: Props.todo.isCompleted,
                },
              });
            }}
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={() => {
              setEditState({ ...editState, isdone: true });
            }}
          >
            취소
          </button>
        </li>
      )}
    </Div>
  );
};

export default List;

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.1);
`;
