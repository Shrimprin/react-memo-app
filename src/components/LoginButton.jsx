import React from "react";

import { StyledButton } from "./StyledButton";
import { useLogin } from "../hooks/useLogin";

export default function LoginButton() {
  const { isLogin, setIsLogin } = useLogin();

  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <StyledButton onClick={() => handleClick()}>
      {isLogin ? "ログアウト" : "ログイン"}
    </StyledButton>
  );
}
