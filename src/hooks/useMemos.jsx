import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
import { v4 as uuid } from "uuid";

export default function useMemos() {
  const [memos, setMemos] = useLocalStorage("memos");

  const createMemo = useCallback(() => {
    const newMemo = { id: uuid(), content: "新規メモ" };
    setMemos((prevMemos) => [...prevMemos, newMemo]);
    return newMemo;
  }, [setMemos]);

  const updateMemo = useCallback(
    (updatedMemo) => {
      setMemos((prevMemos) =>
        prevMemos.map((memo) =>
          memo.id === updatedMemo.id ? updatedMemo : memo,
        ),
      );
    },
    [setMemos],
  );

  const deleteMemo = useCallback(
    (id) => {
      setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
    },
    [setMemos],
  );

  return { memos, createMemo, updateMemo, deleteMemo };
}
