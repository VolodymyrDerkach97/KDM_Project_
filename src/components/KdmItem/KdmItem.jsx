import DeleteModal from "components/DeleteModal/DeleteModal";
import KdmModal from "components/KdmModal/KdmModal";

import { useState } from "react";
import { daysRemaining, formatDate } from "utils";

import {
  Button,
  Name,
  UpdateDate,
  WrapperButton,
  WrapperFooter,
  WrapperItem,
} from "./KdmItem.styled";

import { IoIosNotifications } from "react-icons/io";
import { useKdm } from "hooks/useKdm";

const KdmItem = (kdmData) => {
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
      <Name>{kdmData.name}</Name>
      <p>Початок ключа: {kdmData.timeStart}</p>
      <p>Кінець ключа: {kdmData.timeEnd}</p>
      <p>Зали: {kdmData.hall}</p>
      <WrapperFooter>
        {inAuth ? (
          <WrapperButton>
            <Button
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
            >
              Змінити
            </Button>
            <Button
              onClick={() => {
                setShowDeleteModal((prev) => !prev);
              }}
            >
              Видалити
            </Button>
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

export default KdmItem;
