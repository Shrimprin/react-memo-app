import React, { useState, useEffect } from "react";

export default function Form({ memo, updateMemo, deleteMemo, hideForm }) {
  const [content, setContent] = useState(memo.content);

  // 編集するメモが変わったら、フォームに表示する内容を編集中のメモの内容に変更
  useEffect(() => {
    setContent(memo.content);
  }, [memo]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content.trim()) return;
    const updatedMemo = { id: memo.id, content: content };
    updateMemo(updatedMemo);
    setContent("");
    hideForm();
  };

  const handleDelete = () => {
    deleteMemo(memo.id);
    hideForm();
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={content} onChange={handleChange} rows="4" cols="50" />
        <input type="submit" value="Save Memo" />
      </form>
      <button onClick={() => handleDelete(memo.id)}>delete</button>
    </div>
  );
}
