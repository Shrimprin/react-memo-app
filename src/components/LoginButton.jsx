import React, { useContext } from "react";

import { StyledButton } from "./StyledButton";
import { LoginContext } from "./LoginProvider";

const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <StyledButton onClick={() => handleClick()}>
      {isLogin ? "ログアウト" : "ログイン"}
    </StyledButton>
  );
};

export default React.memo(LoginButton);
