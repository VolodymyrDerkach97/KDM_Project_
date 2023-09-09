import { createContext, useContext, useEffect, useState } from 'react';
import { addKdm, getKdm, removeKdm, updateKdm } from 'service/kdmApi';

const KdmContext = createContext();

export const useKdm = () => useContext(KdmContext);

export const KdmProvider = ({ children }) => {
  const [listKdm, setListKdm] = useState([]);

  useEffect(() => {
    const x = async () => {
      const res = await getKdm();
      console.log('getKdm', res);
      setListKdm(res.data);
    };
    x();
  }, []);

  const add = async data => {
    const res = await addKdm(data);
    console.log('add', res);
    setListKdm(res.data);
  };

  const get = async () => {
    const res = await getKdm();
    console.log('get', res);
    setListKdm(res.data);
  };
  const update = async data => {
    console.log('data', data);
    const res = await updateKdm(data);
    console.log('update', res);
    setListKdm(res.data);
  };

  const remove = async id => {
    const res = await removeKdm(id);
    console.log('remove', res);
    setListKdm(res.data);
  };

  return (
    <KdmContext.Provider value={{ listKdm, add, get, update, remove }}>
      {children}
    </KdmContext.Provider>
  );
};
