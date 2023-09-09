import DeleteModal from 'components/DeleteModal/DeleteModal';
import KdmModal from 'components/KdmModal/KdmModal';

import { useState } from 'react';
import { daysRemaining, formatDate } from 'utils';

import {
  Button,
  Name,
  UpdateDate,
  WrapperButton,
  WrapperFooter,
  WrapperItem,
} from './KdmItem.styled';

import { IoIosNotifications } from 'react-icons/io';

// io IoIosNotifications
const KdmItem = kdmData => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const dedline = daysRemaining(kdmData.timeEnd);

  const togleModal = () => {
    setShowModal(prev => !prev);
  };
  const togleDeleteModal = () => {
    setShowDeleteModal(prev => !prev);
  };

  return (
    <WrapperItem>
      <Name>{kdmData.name}</Name>
      <p>Початок ключа: {kdmData.timeStart}</p>
      <p>Кінець ключа: {kdmData.timeEnd}</p>
      <p>Зали: {kdmData.hall}</p>
      <WrapperFooter>
        <WrapperButton>
          <Button
            onClick={() => {
              setShowModal(prev => !prev);
            }}
          >
            Змінити
          </Button>
          <Button
            onClick={() => {
              setShowDeleteModal(prev => !prev);
            }}
          >
            Видалити
          </Button>
        </WrapperButton>

        <UpdateDate>{formatDate(kdmData.updatedAt)}</UpdateDate>
        {dedline ? <IoIosNotifications fill="red" size={25} /> : ''}
      </WrapperFooter>

      {showModal && (
        <KdmModal onClose={togleModal} type={'update'} kdmData={kdmData} />
      )}
      {showDeleteModal && (
        <DeleteModal onClose={togleDeleteModal} id={kdmData._id} />
      )}
    </WrapperItem>
  );
};

export default KdmItem;
