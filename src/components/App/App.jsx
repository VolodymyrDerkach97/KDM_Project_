import { useState } from "react";

import { useFilter, useKdm } from "hooks";

import KdmList from "../KdmList/KdmList";
import { KdmModal, AuthModal } from "components/Modal";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";

import { MainStyled, ButtonWrapper, ListControllWrapper } from "./App.styled";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { currentUser } from "service/userApi";

const minute = 60000;

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const { inAuth } = useKdm();
  const { list } = useFilter(filter);

  const noSleepServer = async () => {
    await currentUser();
  };

  setInterval(() => {
    noSleepServer();
    console.log("Пан Server! Не спать вафледрон");
  }, minute);

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
      <AppBar togleModal={togleModal} setFilter={setFilter} />
      <MainStyled>
        <ListControllWrapper>
          {inAuth ? <Button type={"add"} togleModal={togleModal} /> : ""}

          <ButtonWrapper>
            <Button type={"filterAll"} setFilter={setFilter} />
            <Button type={"filterDedline"} setFilter={setFilter} />
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
