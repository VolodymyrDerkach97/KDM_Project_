import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border: 1px solid #007bff;

  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  outline: none;

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: #007bff; /* Змінюємо колір при наведенні */
    color: #fff;
  }
`;
export const ButtonRedStyled = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border: 1px solid red;

  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  outline: none;

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    border: 1px solid red;
    background-color: red; /* Змінюємо колір при наведенні */
    color: #fff;
  }
`;
