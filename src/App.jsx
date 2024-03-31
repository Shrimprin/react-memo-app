import React from "react";
import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuid } from "uuid";

export default function App() {
  const [memos, setMemos] = useState([]);

  const addMemo = (content) => {
    setMemos([...memos, { id: uuid(), content: content }]);
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
