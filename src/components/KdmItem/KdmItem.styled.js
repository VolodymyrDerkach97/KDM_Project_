import styled from "@emotion/styled";

export const WrapperItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 10px;

  min-height: 100px;
  min-width: 350px;

  background-color: #ffffff;

  border: 1px solid #e5e5e5;
  border-radius: 20px;

  box-shadow: 0px 10px 13px -7px #000000;

  font-size: 18px;
`;
export const WrapperInfo = styled.div``;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const WrapperButton = styled.div`
  display: flex;
`;

export const UpdateDate = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin-left: auto;
  color: #a2a2a2;
  font-size: 15px;
`;

export const Button = styled.button`
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
