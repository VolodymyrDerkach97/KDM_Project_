import { useKdm } from "hooks";
import { ButtonWrapper, HeaderStyled, TitleStyled } from "./AppBar.styled";
import { Button } from "components/Button";

export const AppBar = ({ togleModal, setFilter, activeFilter }) => {
  const { inAuth } = useKdm();
  return (
    <>
      <HeaderStyled>
        <TitleStyled>KDM Monitor</TitleStyled>
        <ButtonWrapper>
          {inAuth ? (
            <Button type={"logout"} />
          ) : (
            <Button type={"login"} togleModal={togleModal} />
          )}
        </ButtonWrapper>
      </HeaderStyled>
    </>
  );
};
