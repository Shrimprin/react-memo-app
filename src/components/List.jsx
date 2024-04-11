import React from "react";

export default function List({ memos, createMemo, setEditingMemo, showForm }) {
  const editMemo = (memo) => {
    setEditingMemo(memo);
    showForm();
  };

  const list = memos.map((memo) => (
    <li key={memo.id}>
      <span onClick={() => editMemo(memo)}>
        {memo.content ? memo.content.split("\n")[0] : ""}
      </span>
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
