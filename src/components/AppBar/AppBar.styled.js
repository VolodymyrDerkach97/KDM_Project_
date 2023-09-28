import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 10px 5px;

  background-color: ${(props) => props.theme.colors.bgHeaderColor};
`;

export const TitleStyled = styled.h1`
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
