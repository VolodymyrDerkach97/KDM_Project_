import PropTypes from "prop-types";
import { useEffect } from "react";

import { createPortal } from "react-dom";

import { ModalStyled, Overlay } from "./DeleteModal.styled";
import { useKdm } from "hooks/useKdm";

const portalModal = document.querySelector("#modal-root");

export const DeleteModal = ({ onClose, id }) => {
  const { remove } = useKdm();

  const onDelete = async () => {
    remove(id);
    onClose();
  };

  const onCloseOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onCloseKey = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onCloseKey);
    return () => window.removeEventListener("keydown", onCloseKey);
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onCloseOverlay}>
      <ModalStyled>
        <button onClick={() => onDelete()}>Так</button>
        <button onClick={() => onClose()}>Ні</button>
      </ModalStyled>
    </Overlay>,
    portalModal
  );
};

DeleteModal.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.string,
};
