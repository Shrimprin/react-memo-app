import React from "react";
import styled from "styled-components";

import { StyledButton } from "./StyledButton";

const ListContainer = styled.div`
  padding: 20px;
  flex: 0.3;
`;

const ListItem = styled.div`
  list-style: none;
  margin: 5px 0;
  background-color: white;
  transition: color 0.2s;
  cursor: pointer;
  text-decoration: underline;
  color: navy;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

const EditingListItem = styled(ListItem)`
  color: black;
  text-decoration: none;
  &:before {
    content: "🖊";
    margin-right: 8px;
  }
  &:hover {
    text-decoration: none;
  }
`;

const List = ({ memos, createMemo, setEditingMemo, showForm, editingMemo }) => {
  const editMemo = (memo) => {
    setEditingMemo(memo);
    showForm();
  };

  const listItems = memos.map((memo) => {
    const isEditing = editingMemo?.id === memo.id;
    const MemoComponent = isEditing ? EditingListItem : ListItem;

    return (
      <MemoComponent key={memo.id} onClick={() => editMemo(memo)}>
        {memo.content ? memo.content.split("\n")[0] : ""}
      </MemoComponent>
    );
  });

  const newMemo = () => {
    const memo = createMemo();
    setEditingMemo(memo);
    showForm();
  };

  return (
    <ListContainer>
      <ul>{listItems}</ul>
      <StyledButton onClick={newMemo}>+</StyledButton>
    </ListContainer>
  );
};

export default React.memo(List);
