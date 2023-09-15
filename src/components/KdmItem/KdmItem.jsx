import { KdmModal, DeleteModal } from "../Modal";

import { useState } from "react";
import { daysRemaining, formatDate } from "utils";

import {
  Name,
  UpdateDate,
  WrapperButton,
  WrapperFooter,
  WrapperInfo,
  WrapperItem,
} from "./KdmItem.styled";

import { IoIosNotifications } from "react-icons/io";
import { useKdm } from "hooks/useKdm";
import { Button } from "components/Button";

export const KdmItem = (kdmData) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { inAuth } = useKdm();

  const dedline = daysRemaining(kdmData.timeEnd);

  const togleModal = () => {
    setShowModal((prev) => !prev);
  };
  const togleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  return (
    <WrapperItem>
      <WrapperInfo>
        <Name>{kdmData.name}</Name>
        <p>Початок ключа: {kdmData.timeStart}</p>
        <p>Кінець ключа: {kdmData.timeEnd}</p>
        <p>Зали: {kdmData.hall}</p>
      </WrapperInfo>
      <WrapperFooter>
        {inAuth ? (
          <WrapperButton>
            <Button type={"update"} setShowModal={setShowModal} />
            <Button type={"delete"} setShowModal={setShowDeleteModal} />
          </WrapperButton>
        ) : (
          ""
        )}

        <UpdateDate>{formatDate(kdmData.updatedAt)}</UpdateDate>
        {dedline ? (
          <IoIosNotifications
            fill="#FC5151"
            size={25}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          />
        ) : (
          ""
        )}
      </WrapperFooter>

      {showModal && (
        <KdmModal onClose={togleModal} type={"update"} kdmData={kdmData} />
      )}
      {showDeleteModal && (
        <DeleteModal onClose={togleDeleteModal} id={kdmData._id} />
      )}
    </WrapperItem>
  );
};
