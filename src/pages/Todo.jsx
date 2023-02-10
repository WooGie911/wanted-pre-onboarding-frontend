import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Lists from "../components/Lists";
import styled from "styled-components";
import Apis from "../shared/Apis";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const getTodos = async () => {
    const data = await Apis.getTodosAX();
    console.log(data);
    if (data.status === 200) {
      setTodos(data.data);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("access_token") === null ||
      localStorage.getItem("access_token") === undefined
    ) {
      navigate("/");
    }
  }, []);

  return (
    <Layout>
      <Form setTodos={setTodos} todos={todos} />
      <Lists getTodos={getTodos} setTodos={setTodos} todos={todos} />
    </Layout>
  );
};

export default Todo;

const Layout = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  min-height: 100vh;
  margin-left: 25%;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
