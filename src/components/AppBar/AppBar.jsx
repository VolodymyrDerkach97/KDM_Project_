import PropTypes from "prop-types";

import { useKdm } from "hooks";

import { Button } from "components/Button";

import { ButtonWrapper, HeaderStyled, TitleStyled } from "./AppBar.styled";

export const AppBar = ({ togleModal }) => {
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

AppBar.propTypes = {
  togleModal: PropTypes.func,
};
