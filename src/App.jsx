import React from "react";
import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [memos, setMemos] = useState([]);
  const [nextId, setNextId] = useState(0);

  const addMemo = (content) => {
    setMemos([...memos, { id: nextId, content: content }]);
    setNextId(nextId + 1);
  };

  const deleteMemo = (id) => {
    const filteredArray = memos.filter((memo) => memo.id !== id);
    setMemos(filteredArray);
  };

  return (
    <div>
      <h2>React Memo App</h2>
      <Form addMemo={addMemo} />
      <List memos={memos} deleteMemo={deleteMemo} />
    </div>
  );
}
