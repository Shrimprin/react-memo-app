import React from "react";

export default function List({ memos, createMemo, setEditingMemo, showForm }) {
  const list = memos.map((memo) => (
    <li key={memo.id}>
      {memo.id} - {memo.content}
    </li>
  ));

  const newMemo = () => {
    const memo = createMemo();
    setEditingMemo(memo);
    showForm();
  };
  return (
    <div>
      <h2>List</h2>
      {list}
      <button onClick={newMemo}>Add Memo</button>
    </div>
  );
}
