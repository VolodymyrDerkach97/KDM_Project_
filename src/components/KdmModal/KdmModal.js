import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { createPortal } from "react-dom";
import {
  Overlay,
  ModalStyled,
  InputWrapper,
  InputStyled,
} from "./KdmModal.styled";
import { nanoid } from "nanoid";

import { useKdm } from "hooks/useKdm";

const portalModal = document.querySelector("#modal-root");

const KdmModal = ({ onClose, type, kdmData = "" }) => {
  const [name, setName] = useState(kdmData.name || "");
  const [timeStart, setTimeStart] = useState(kdmData.timeStart || "");
  const [timeEnd, setTimeEnd] = useState(kdmData.timeEnd || "");
  const [hall, setHall] = useState(kdmData.hall || "");

  const { add, update } = useKdm();

  const onSubmitContact = async (e) => {
    e.preventDefault();
    switch (type) {
      case "add":
        await add({ name, timeStart, timeEnd, hall });
        break;
      case "update":
        await update({ id: kdmData._id, name, timeStart, timeEnd, hall });
        break;

      default:
        break;
    }

    reset();
    onClose("kdm");
  };

  const reset = () => {
    setName("");
    setTimeStart("");
    setTimeEnd("");
  };
  const onCloseOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose("kdm");
    }
  };

  useEffect(() => {
    const onCloseKey = (e) => {
      if (e.code === "Escape") {
        onClose("kdm");
      }
    };
    window.addEventListener("keydown", onCloseKey);
    return () => window.removeEventListener("keydown", onCloseKey);
  }, [onClose]);

  const nameInputId = nanoid();
  const timeStartInputId = nanoid();
  const timeEndInputId = nanoid();

  let textButton = "";
  switch (type) {
    case "add":
      textButton = "Додати ключ";
      break;
    case "update":
      textButton = "Оновити ключ";
      break;

    default:
      break;
  }
  return createPortal(
    <Overlay onClick={onCloseOverlay}>
      <ModalStyled>
        <form action="" onSubmit={onSubmitContact}>
          <InputWrapper>
            <label htmlFor={nameInputId}>Назва</label>
            <InputStyled
              id={nameInputId}
              type="text"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor={timeStartInputId}>Початок</label>
            <InputStyled
              mask="99-99-9999 99:99"
              id={timeStartInputId}
              type="text"
              value={timeStart}
              onChange={({ target: { value } }) => setTimeStart(value)}
              name="timeStart"
              title="Дата початку ключа"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor={timeEndInputId}>Кінець</label>
            <InputStyled
              mask="99-99-9999 99:99"
              id={timeEndInputId}
              type="text"
              value={timeEnd}
              onChange={({ target: { value } }) => setTimeEnd(value)}
              name="timeEnd"
              title="Дата закінчення ключа"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor={nameInputId}>Зали</label>
            <InputStyled
              id={nameInputId}
              type="text"
              value={hall}
              onChange={({ target: { value } }) => setHall(value)}
              name="hall"
              title="Hall"
              required
            />
          </InputWrapper>
          <button type="submit">{textButton}</button>
        </form>
      </ModalStyled>
    </Overlay>,
    portalModal
  );
};

export default KdmModal;

KdmModal.propTypes = {
  onClose: PropTypes.func,
};
