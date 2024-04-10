import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuid } from "uuid";

export default function App() {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memos")) || []
  );
  const [isFormActive, setIsFormActive] = useState(false);
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const createMemo = () => {
    const newMemo = { id: uuid(), content: "新規メモ" };
    const updatedMemos = [...memos, newMemo];
    setMemos(updatedMemos);
    return newMemo;
  };

  const updateMemo = (updatedMemo) => {
    const updatedMemos = memos.map((memo) =>
      memo.id === updatedMemo.id ? updatedMemo : memo
    );
    setMemos(updatedMemos);
  };

  const showMemo = (memo) => {};

  const deleteMemo = (id) => {
    const filteredArray = memos.filter((memo) => memo.id !== id);
    setMemos(filteredArray);
  };

  const showForm = () => {
    setIsFormActive(true);
  };

  const hideForm = () => {
    setIsFormActive(false);
  };

  return (
    <div>
      <h2>React Memo App</h2>
      {isFormActive && (
        <Form
          memo={editingMemo}
          updateMemo={updateMemo}
          deleteMemo={deleteMemo}
          hideForm={hideForm}
        />
      )}
      <List
        memos={memos}
        createMemo={createMemo}
        setEditingMemo={setEditingMemo}
        showForm={showForm}
      />
    </div>
  );
}
