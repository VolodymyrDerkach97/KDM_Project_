import PropTypes from "prop-types";
import { useKdm } from "hooks/useKdm";
import { ButtonRedStyled, ButtonStyled } from "./Button.styled";
import { filterStatus } from "utils";

export const Button = ({
  type,
  textButton,
  togleModal,
  setFilter,
  onDelete,
  onClose,
  setShowModal,
}) => {
  const { onLogout } = useKdm();

  let buttonFinal;

  switch (type) {
    case "login":
      buttonFinal = (
        <ButtonStyled onClick={() => togleModal("login")}>Логін</ButtonStyled>
      );
      break;
    case "logout":
      buttonFinal = (
        <ButtonRedStyled onClick={() => onLogout()}>Вийти</ButtonRedStyled>
      );
      break;
    case "add":
      buttonFinal = (
        <ButtonStyled onClick={() => togleModal("kdm")}>
          + Новий ключ
        </ButtonStyled>
      );
      break;
    case "update":
      buttonFinal = (
        <ButtonStyled
          onClick={() => {
            setShowModal((prev) => !prev);
          }}
        >
          Змінити
        </ButtonStyled>
      );
      break;
    case "delete":
      buttonFinal = (
        <ButtonRedStyled
          onClick={() => {
            setShowModal((prev) => !prev);
          }}
        >
          Видалити
        </ButtonRedStyled>
      );
      break;

    case "deleteYes":
      buttonFinal = <ButtonStyled onClick={() => onDelete()}>Так</ButtonStyled>;
      break;

    case "deleteNo":
      buttonFinal = (
        <ButtonRedStyled onClick={() => onClose()}>Ні</ButtonRedStyled>
      );
      break;

    case "filterAll":
      buttonFinal = (
        <ButtonStyled
          onClick={() => {
            setFilter(filterStatus.all);
          }}
        >
          Всі
        </ButtonStyled>
      );
      break;

    case "filterDedline":
      buttonFinal = (
        <ButtonStyled onClick={() => setFilter(filterStatus.dedline)}>
          Закінчуються
        </ButtonStyled>
      );
      break;
    case "submit":
      buttonFinal = <ButtonStyled>{textButton}</ButtonStyled>;
      break;
    default:
      break;
  }
  return <>{buttonFinal}</>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  togleModal: PropTypes.func,
  setFilter: PropTypes.func,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
  setShowModal: PropTypes.func,
};
