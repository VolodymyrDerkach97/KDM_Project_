import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { createPortal } from "react-dom";
import {
  Overlay,
  ModalStyled,
  InputWrapper,
  InputStyled,
} from "./AuthModal.styled";
import { nanoid } from "nanoid";

import { useKdm } from "hooks/useKdm";

const portalModal = document.querySelector("#modal-root");

export const AuthModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin } = useKdm();

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    await onLogin({ email, password });
    reset();
    onClose("login");
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
  const onCloseOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose("login");
    }
  };

  useEffect(() => {
    const onCloseKey = (e) => {
      if (e.code === "Escape") {
        onClose("login");
      }
    };
    window.addEventListener("keydown", onCloseKey);
    return () => window.removeEventListener("keydown", onCloseKey);
  }, [onClose]);

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  return createPortal(
    <Overlay onClick={onCloseOverlay}>
      <ModalStyled>
        <form action="" onSubmit={onSubmitLogin}>
          <InputWrapper>
            <label htmlFor={emailInputId}>Електронна пошта</label>
            <InputStyled
              id={emailInputId}
              type="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              name="email"
              title="Електронна пошта"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor={passwordInputId}>Пароль</label>
            <InputStyled
              id={passwordInputId}
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              name="password"
              title="Пароль"
              required
            />
          </InputWrapper>

          <button type="submit">LOGIN</button>
        </form>
      </ModalStyled>
    </Overlay>,
    portalModal
  );
};

AuthModal.propTypes = {
  onClose: PropTypes.func,
};
