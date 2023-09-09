import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "service/authApi";
import { addKdm, getKdm, removeKdm, updateKdm } from "service/kdmApi";
import { currentUser } from "service/userApi";

const KdmContext = createContext();

export const useKdm = () => useContext(KdmContext);

export const KdmProvider = ({ children }) => {
  const [listKdm, setListKdm] = useState([]);
  const [inAuth, setInAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setInAuth(true);
      return;
    }
    setInAuth(false);
  }, []);

  useEffect(() => {
    const refreshUser = async () => {
      const res = await currentUser();

      if (res === undefined || res.status !== 200) {
        console.log("NO LOGIN USER");
        setInAuth(false);
        return;
      }
    };
    refreshUser();
  }, []);

  useEffect(() => {
    const refreshKdm = async () => {
      const res = await getKdm();
      setListKdm(res.data);
    };
    refreshKdm();
  }, []);

  const onLogin = async () => {
    const res = await login({ email: "kdm@gmail.com", password: "kdm123321" });

    if (res.code !== 200) {
      console.log("NO LOGIN");
      setInAuth(false);
      return;
    }

    setInAuth(true);
  };
  const onLogout = async () => {
    const res = await logout();

    if (res.status !== 204 || "") {
      console.log("NO LOGOUT");
      return;
    }

    setInAuth(false);
  };

  const add = async (data) => {
    const res = await addKdm(data);
    setListKdm(res.data);
  };

  const get = async () => {
    const res = await getKdm();
    setListKdm(res.data);
  };

  const update = async (data) => {
    const res = await updateKdm(data);
    setListKdm(res.data);
  };

  const remove = async (id) => {
    const res = await removeKdm(id);
    console.log("remove", res);
    setListKdm(res.data);
  };

  return (
    <KdmContext.Provider
      value={{ listKdm, add, get, update, remove, inAuth, onLogin, onLogout }}
    >
      {children}
    </KdmContext.Provider>
  );
};
