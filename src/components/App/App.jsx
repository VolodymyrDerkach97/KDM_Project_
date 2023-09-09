import { useState } from 'react';
import KdmList from '../KdmList/KdmList';
import KdmModal from '../KdmModal/KdmModal';

import { filterStatus } from 'utils';
import { useFilter } from 'hooks';
import { MainStyled } from './App.styled';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const { list } = useFilter(filter);

  const togleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <MainStyled>
      <h1>KDM MONITOR</h1>

      <button
        onClick={() => {
          setShowModal(prev => !prev);
        }}
      >
        + Новий ключ
      </button>

      <button onClick={() => setFilter(filterStatus.all)}>Всі</button>
      <button onClick={() => setFilter(filterStatus.dedline)}>
        Закінчуються
      </button>

      {showModal && <KdmModal onClose={togleModal} type={'add'} />}

      <KdmList list={list} />
    </MainStyled>
  );
};
