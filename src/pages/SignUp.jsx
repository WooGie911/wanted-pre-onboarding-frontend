import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Apis from "../shared/Apis";

const SignUp = () => {
  const initialState = {
    email: "",
    password: "",
    passwordCheck: "",
  };
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const signUp = async (payload) => {
    const data = await Apis.signUpAX(payload);
    console.log(data);
    if (data.status === 201) {
      navigate("/");
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      input.email.trim() === "" ||
      input.password.trim() === "" ||
      input.passwordCheck.trim() === ""
    )
      return alert("입력을 확인하세요.");
    else if (input.password !== input.passwordCheck)
      return alert("비밀번호가 일치하지 않습니다.");
    signUp({ email: input.email, password: input.password });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      navigate("/todo");
    }
  }, []);

  return (
    <Layout>
      <Div>
        <DivInput>
          이메일
          <InputBox
            data-testid="email-input"
            type="text"
            name="email"
            className="input-"
            value={input.email || ""}
            onChange={onChangeHandlerInput}
            placeholder="이메일을 입력해주세요"
          />
        </DivInput>
        <DivInput>
          비밀번호
          <InputBox
            data-testid="password-input"
            type="password"
            name="password"
            className="input-password"
            value={input.password || ""}
            onChange={onChangeHandlerInput}
            placeholder="비밀번호를 입력해주세요"
          />
        </DivInput>
        <DivInput>
          비밀번호 확인
          <InputBox
            data-testid="password-input"
            type="password"
            name="passwordCheck"
            className="input-password"
            value={input.passwordCheck || ""}
            onChange={onChangeHandlerInput}
            placeholder="비밀번호를 한번더 입력해주세요"
          />
        </DivInput>
        <DivButton>
          <Button
            data-testid="signup-button"
            onClick={onSubmitHandler}
            disabled={
              input.email.includes("@") === false ||
              input.password.length < 8 ||
              input.password !== input.passwordCheck
            }
          >
            회원가입
          </Button>
        </DivButton>
        <DivButton>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            이미 회원이신가요?
          </Button>
        </DivButton>
      </Div>
    </Layout>
  );
};

export default SignUp;

const Layout = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  min-height: 100vh;
  margin-left: 25%;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Div = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const DivInput = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  width: 350px;
  height: 20px;
  align-items: center;
  padding: 10px;
  position: relative;
  margin-bottom: 20px;
`;

const InputBox = styled.input`
  position: absolute;
  right: 10px;
  width: 200px;
  height: 10px;
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
`;

const DivButton = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: skyblue;
  width: 150px;
  height: 40px;
  border-radius: 10px;
`;
