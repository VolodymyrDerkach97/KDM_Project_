const { filterStatus, daysRemaining } = require('utils');
const { useKdm } = require('./useKdm');

export const useFilter = filter => {
  const { listKdm } = useKdm();
  console.log('filter', filter);
  let list;
  switch (filter) {
    case filterStatus.all:
      list = listKdm;
      break;

    case filterStatus.dedline:
      list = listKdm.filter(item => {
        return daysRemaining(item.timeEnd);
      });
      break;

    default:
      break;
  }
  return { list };
};
