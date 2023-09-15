import { useKdm } from "hooks";
import {
  ButtonWrapper,
  HeaderStyled,
  ListControllWrapper,
  TitleStyled,
} from "./AppBar.styled";
import { Button } from "components/Button";

export const AppBar = ({ togleModal, setFilter }) => {
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
      <ListControllWrapper>
        <Button type={"add"} togleModal={togleModal} />
        <ButtonWrapper>
          <Button type={"filterAll"} setFilter={setFilter} />
          <Button type={"filterDedline"} setFilter={setFilter} />
        </ButtonWrapper>
      </ListControllWrapper>
    </>
  );
};
