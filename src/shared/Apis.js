import axios from "axios";

const access_token = localStorage.getItem("access_token");

const noToken = axios.create({
  baseURL: ``,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const tokenJT = axios.create({
  baseURL: ``,
  headers: {
    "Content-Type": `application/json`,
    Authorization: `Bearer ${access_token}`,
  },
  withCredentials: true,
});

const tokenNT = axios.create({
  baseURL: ``,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
  withCredentials: true,
});

export const Apis = {
  signinAX: (payload) => noToken.post(`/auth/signin`, payload),

  signUpAX: (payload) => noToken.post(`/auth/signup`, payload),

  getTodosAX: () => tokenNT.get(`/todos`),

  createTodoAX: (payload) => tokenJT.post(`/todos`, payload),

  deleteTodosAX: (payload) => tokenNT.delete(`/todos/${payload}`),

  updateTodoAX: (payload) => tokenJT.put(`/todos/${payload.id}`, payload.body),
};

export default Apis;
