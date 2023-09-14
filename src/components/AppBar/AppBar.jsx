import {
  ButtonWrapper,
  HeaderStyled,
  ListControllWrapper,
  TitleStyled,
} from "./AppBar.styled";
import { Button } from "components/Button";

export const AppBar = ({ togleModal, setFilter }) => {
  return (
    <>
      <HeaderStyled>
        <TitleStyled>KDM Monitor</TitleStyled>
        <ButtonWrapper>
          <Button type={"login"} togleModal={togleModal} />
          <Button type={"logout"} />
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
