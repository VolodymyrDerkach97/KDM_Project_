import { useState } from "react";
import KdmList from "../KdmList/KdmList";
import KdmModal from "../KdmModal/KdmModal";
import LoginModal from "components/LoginModal";
import AppBar from "components/AppBar";

import { useFilter } from "hooks";
import { MainStyled } from "./App.styled";

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [filter, setFilter] = useState("all");

  const { list } = useFilter(filter);

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
    <MainStyled>
      <AppBar togleModal={togleModal} setFilter={setFilter} />

      {showModal && <KdmModal onClose={togleModal} type={"add"} />}
      {showLoginModal && <LoginModal onClose={togleModal} />}

      <KdmList list={list} />
    </MainStyled>
  );
};
