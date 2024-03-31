import React from "react";

export default function List({ memos, deleteMemo }) {
  const list = memos.map((memo) => (
    <li key={memo.id}>
      {memo.id} - {memo.content}
      <button onClick={() => deleteMemo(memo.id)}>delete</button>
    </li>
  ));

  return (
    <div>
      <h2>List</h2>
      {list}
    </div>
  );
}
