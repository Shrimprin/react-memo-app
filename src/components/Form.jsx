import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { StyledButton } from "./StyledButton";

const FormContainer = styled.div`
  padding: 20px;
  border-left: 1px solid lightgray;
  flex: 0.7;
`;

const StyledTextArea = styled.textarea`
  width: calc(100% - 20px);
  margin: 10px 0;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  resize: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Form = ({ memo, updateMemo, deleteMemo, setEditingMemo, hideForm }) => {
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
    setEditingMemo(null);
    hideForm();
  };

  const handleDelete = () => {
    deleteMemo(memo.id);
    hideForm();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <StyledTextArea value={content} onChange={handleChange} rows="8" />
        <ButtonsContainer>
          <StyledButton type="submit">保存</StyledButton>
          <StyledButton onClick={() => handleDelete(memo.id)}>
            削除
          </StyledButton>
        </ButtonsContainer>
      </form>
    </FormContainer>
  );
};

export default React.memo(Form);
