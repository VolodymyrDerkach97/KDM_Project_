const { filterStatus, daysRemaining } = require("utils");
const { useKdm } = require("./useKdm");

export const useFilter = (filter) => {
  const { listKdm } = useKdm();

  let list;
  let activeFilter;
  switch (filter) {
    case filterStatus.all:
      list = listKdm;
      activeFilter = filterStatus.all;
      break;

    case filterStatus.dedline:
      list = listKdm.filter((item) => {
        return daysRemaining(item.timeEnd);
      });
      activeFilter = filterStatus.dedline;
      break;

    default:
      break;
  }
  return { list, activeFilter };
};
