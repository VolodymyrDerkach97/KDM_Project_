import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "service/authApi";
import { addKdm, getKdm, removeKdm, updateKdm } from "service/kdmApi";
import { currentUser } from "service/userApi";
import { toast } from "react-toastify";
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

      if (!res || res.status !== 200) {
        setInAuth(false);
        return;
      }
    };
    refreshUser();
  }, []);

  useEffect(() => {
    const refreshKdm = async () => {
      const res = await getKdm();
      toast.success("Список ключів отримано");
      setListKdm(res.data.data);
    };
    refreshKdm();
  }, []);

  const onLogin = async (data) => {
    const res = await login(data);

    if (!res) {
      setInAuth(false);
      return;
    }
    if (res.status === 200) {
      toast.success("Ви успішно увійшли");
    }

    // const res = await login({ email: "kdm@gmail.com", password: "kdm123321" });

    setInAuth(true);
  };
  const onLogout = async () => {
    const res = await logout();

    if (!res) {
      setInAuth(true);
      return;
    }
    if (res.status === 204) {
      toast.success("Ви успішно вийшли із системи");
      setInAuth(false);
      return;
    } else {
      toast.error("Ви не вийшли із системи");
    }
  };

  const add = async (data) => {
    const res = await addKdm(data);
    if (!res) {
      return;
    }
    if (res.status === 201) {
      toast.success("Ключ створено");
      setListKdm(res.data.data);
    }
  };

  const get = async () => {
    const res = await getKdm();
    if (!res) {
      return;
    }
    if (res.status === 200) {
      toast.success("Список ключів отримано");
      setListKdm(res.data.data);
    }
  };

  const update = async (data) => {
    const res = await updateKdm(data);

    if (!res) {
      return;
    }
    if (res.status === 200) {
      toast.success("Ключ оновлено");
      setListKdm(res.data.data);
    }
  };

  const remove = async (id) => {
    const res = await removeKdm(id);
    if (!res) {
      return;
    }
    if (res.status === 200) {
      toast.success("Ключ видалено");
      setListKdm(res.data.data);
    }
  };

  return (
    <KdmContext.Provider
      value={{ listKdm, add, get, update, remove, inAuth, onLogin, onLogout }}
    >
      {children}
    </KdmContext.Provider>
  );
};
