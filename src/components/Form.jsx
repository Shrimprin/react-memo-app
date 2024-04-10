import React from "react";
import { useState } from "react";

export default function Form({ memo, updateMemo, deleteMemo, hideForm }) {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(content);
    const updatedMemo = { id: memo.id, content: content };
    updateMemo(updatedMemo);
    setContent("");
    hideForm();
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input value={content} onChange={handleChange} />
        <input type="submit" value="Save Memo" />
      </form>
      <button onClick={hideForm}>Cancel</button>
      <button onClick={() => deleteMemo(memo.id)}>delete</button>
    </div>
  );
}
