import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Form from "./components/Form";
import List from "./components/List";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
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
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memos")) || []
  );
  const [isFormActive, setIsFormActive] = useState(false);
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const createMemo = useCallback(() => {
    const newMemo = { id: uuid(), content: "新規メモ" };
    const updatedMemos = [...memos, newMemo];
    setMemos(updatedMemos);
    return newMemo;
  }, [memos]);

  const updateMemo = useCallback(
    (updatedMemo) => {
      const updatedMemos = memos.map((memo) =>
        memo.id === updatedMemo.id ? updatedMemo : memo
      );
      setMemos(updatedMemos);
    },
    [memos]
  );

  const deleteMemo = useCallback(
    (id) => {
      const filteredArray = memos.filter((memo) => memo.id !== id);
      setMemos(filteredArray);
    },
    [memos]
  );

  const showForm = () => {
    setIsFormActive(true);
  };

  const hideForm = () => {
    setIsFormActive(false);
  };

  return (
    <AppContainer>
      <Title>React Memo App</Title>
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
  );
}
