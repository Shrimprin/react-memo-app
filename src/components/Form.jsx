import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { StyledButton } from "./StyledButton";
import { useLogin } from "../hooks/useLogin";

const FormWrapper = styled.div`
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Form = ({ memo, updateMemo, deleteMemo, setEditingMemo, hideForm }) => {
  const [content, setContent] = useState(memo.content);
  const { isLogin } = useLogin();

  // 編集するメモが変わったら、フォームに表示する内容を編集中のメモの内容に変更
  useEffect(() => {
    setContent(memo.content);
  }, [memo]);

  const handleChange = (event) => {
    isLogin && setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content.trim()) return;
    const updatedMemo = { id: memo.id, content };
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
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <StyledTextArea value={content} onChange={handleChange} rows="8" />
        {isLogin && (
          <ButtonsWrapper>
            <StyledButton type="submit">保存</StyledButton>
            <StyledButton onClick={() => handleDelete(memo.id)}>
              削除
            </StyledButton>
          </ButtonsWrapper>
        )}
      </form>
    </FormWrapper>
  );
};

export default React.memo(Form);
