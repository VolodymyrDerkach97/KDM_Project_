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
      const res = await toast.promise(currentUser, {
        pending: "Виконується запит на сервер. Це може зайняти деякий час",
        success: "Список ключів отримано 👌",
        error: "Помилка сервера :( Спробуйте пізніше 🤯",
      });
      if (!res) {
        setInAuth(false);
        return;
      }
    };
    refreshUser();
  }, []);

  useEffect(() => {
    const refreshKdm = async () => {
      const res = await getKdm();

      setListKdm(res.data.data);
    };
    refreshKdm();
  }, []);

  const onLogin = async (data) => {
    const res = await toast.promise(login(data), {
      pending: "Виконується запит на сервер. Це може зайняти деякий час",
      success: "Ви успішно увійшли 👌",
      error: "Помилка сервера :( Спробуйте пізніше 🤯",
    });
    if (!res) {
      setInAuth(false);
      return;
    }

    setInAuth(true);
  };
  const onLogout = async () => {
    const res = await toast.promise(logout, {
      pending: "Виконується запит на сервер. Це може зайняти деякий час",
    });
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
    const res = await toast.promise(addKdm(data), {
      pending: "Виконується запит на сервер. Це може зайняти деякий час",

      error: "Помилка сервера :( Спробуйте пізніше 🤯",
    });
    if (!res) {
      return;
    }

    if (res.status === 201) {
      toast.success("Ключ створено 👌");
      setListKdm(res.data.data);
    }
  };

  const get = async () => {
    const res = await getKdm();
    if (!res) {
      return;
    }
    if (res.status === 200) {
      setListKdm(res.data.data);
    }
  };

  const update = async (data) => {
    const res = await toast.promise(updateKdm(data), {
      pending: "Виконується запит на сервер. Це може зайняти деякий час",
      success: "Ключ оновлено 👌",
      error: "Помилка сервера :( Спробуйте пізніше 🤯",
    });
    if (!res) {
      return;
    }
    if (res.status === 200) {
      setListKdm(res.data.data);
    }
  };

  const remove = async (id) => {
    const res = await toast.promise(removeKdm(id), {
      pending: "Виконується запит на сервер. Це може зайняти деякий час",
      success: "Ключ видалено 👌",
      error: "Помилка сервера :( Спробуйте пізніше 🤯",
    });
    if (!res) {
      return;
    }
    if (res.status === 200) {
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
