import React, { useState } from "react";
import styled from "styled-components";

import Form from "./components/Form";
import List from "./components/List";
import LoginButton from "./components/LoginButton";
import useMemos from "./hooks/useMemos";
import { LoginProvider } from "./hooks/useLogin";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  width: 80%;
`;

export default function App() {
  const { memos, createMemo, updateMemo, deleteMemo } = useMemos();
  const [isFormActive, setIsFormActive] = useState(false);
  const [editingMemo, setEditingMemo] = useState(null);

  const showForm = () => {
    setIsFormActive(true);
  };

  const hideForm = () => {
    setIsFormActive(false);
  };

  return (
    <LoginProvider>
      <AppContainer>
        <Title>React Memo App</Title>
        <LoginButtonContainer>
          <LoginButton></LoginButton>
        </LoginButtonContainer>
        <Card>
          <List
            memos={memos}
            createMemo={createMemo}
            setEditingMemo={setEditingMemo}
            showForm={showForm}
            editingMemo={editingMemo}
          />
          {isFormActive && (
            <Form
              memo={editingMemo}
              updateMemo={updateMemo}
              deleteMemo={deleteMemo}
              setEditingMemo={setEditingMemo}
              hideForm={hideForm}
            />
          )}
        </Card>
      </AppContainer>
    </LoginProvider>
  );
}
