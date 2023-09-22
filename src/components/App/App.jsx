import { useState } from "react";

import KdmList from "../KdmList/KdmList";
import { KdmModal, AuthModal } from "components/Modal";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";

import { useFilter } from "hooks";

import { MainStyled, ButtonWrapper, ListControllWrapper } from "./App.styled";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [filter, setFilter] = useState("all");

  const { list, activeFilter } = useFilter(filter);

  const togleModal = (type) => {
    switch (type) {
      case "login":
        setShowLoginModal((prev) => !prev);
        break;
      case "kdm":
        setShowModal((prev) => !prev);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <AppBar
        togleModal={togleModal}
        setFilter={setFilter}
        activeFilter={activeFilter}
      />
      <MainStyled>
        <ListControllWrapper>
          <Button type={"add"} togleModal={togleModal} />
          <ButtonWrapper>
            <Button
              type={"filterAll"}
              setFilter={setFilter}
              activeFilter={activeFilter}
            />
            <Button
              type={"filterDedline"}
              setFilter={setFilter}
              activeFilter={activeFilter}
            />
          </ButtonWrapper>
        </ListControllWrapper>
        <KdmList list={list} />

        {showModal && <KdmModal onClose={togleModal} type={"add"} />}
        {showLoginModal && <AuthModal onClose={togleModal} />}

        <ToastContainer autoClose={2000} />
      </MainStyled>
    </>
  );
};
