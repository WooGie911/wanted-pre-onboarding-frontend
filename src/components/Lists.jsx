import React from "react";
import styled from "styled-components";
import List from "./List";

const Lists = (Props) => {
  return (
    <Div>
      {Props.todos.length !== 0 &&
        Props.todos.map((todo, index) => {
          return (
            <List
              key={index}
              todo={todo}
              setTodos={Props.setTodos}
              getTodos={Props.getTodos}
              deleteTodo={Props.deleteTodo}
            />
          );
        })}
    </Div>
  );
};

export default Lists;

const Div = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
