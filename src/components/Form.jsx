import React from "react";
import { useState } from "react";

export default function Form({ addMemo, hideForm }) {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMemo(content);
    setContent("");
    hideForm();
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input value={content} onChange={handleChange} />
        <input type="submit" value="Add Memo" />
      </form>
      <button onClick={hideForm}>Cancel</button>
    </div>
  );
}
