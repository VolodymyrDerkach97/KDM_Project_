import { useKdm } from "hooks/useKdm";
import { ButtonRedStyled, ButtonStyled } from "./Button.styled";
import { filterStatus } from "utils";

export const Button = ({ text, type, togleModal, setFilter }) => {
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

    case "filterAll":
      buttonFinal = (
        <ButtonStyled onClick={() => setFilter(filterStatus.all)}>
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

    default:
      break;
  }
  return <>{buttonFinal}</>;
};
