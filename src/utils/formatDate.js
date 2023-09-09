export const formatDate = dateString => {
  // Створюємо об'єкт дати на основі рядка
  const date = new Date(dateString);

  // Отримуємо значення дня, місяця і року з об'єкта дати
  const day = date.getDate();
  const month = date.getMonth() + 1; // Місяці починаються з 0, тому додаємо 1
  const year = date.getFullYear();

  // Отримуємо значення годин і хвилин з об'єкта дати
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Форматуємо рядок дати у відповідний формат "DD-MM-YYYY HH:MM"
  const formattedDate =
    (day < 10 ? '0' : '') +
    day +
    '-' +
    (month < 10 ? '0' : '') +
    month +
    '-' +
    year +
    ' ' +
    (hours < 10 ? '0' : '') +
    hours +
    ':' +
    (minutes < 10 ? '0' : '') +
    minutes;

  return formattedDate;
};
