import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuid } from "uuid";

export default function App() {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memos")) || []
  );
  const [isFormActive, setIsFormActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const addMemo = (content) => {
    const newMemo = { id: uuid(), content: content };
    const updatedMemos = [...memos, newMemo];
    setMemos(updatedMemos);
  };

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
      {isFormActive && <Form addMemo={addMemo} hideForm={hideForm} />}
      <List memos={memos} deleteMemo={deleteMemo} showForm={showForm} />
    </div>
  );
}
