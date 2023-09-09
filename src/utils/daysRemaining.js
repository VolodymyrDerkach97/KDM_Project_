export const daysRemaining = timeEnd => {
  // Парсимо рядок у форматі "09-09-2023 03:00"
  const [datePart, timePart] = timeEnd.split(' ');
  const [day, month, year] = datePart.split('-').map(Number);
  const [hour, minute] = timePart.split(':').map(Number);

  // Створюємо об'єкт дати та часу
  const endDate = new Date(year, month - 1, day, hour, minute); // Місяці в Date починаються з 0, тому віднімаємо 1 від місяця

  // Поточна дата
  const currentDate = new Date();

  // Обчислюємо різницю в мілісекундах між датами
  const timeDifference = endDate - currentDate;

  // Обчислюємо кількість днів залишилось до кінця ключа
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Повертаємо true, якщо залишилося 5 або менше днів
  return daysLeft <= 3;
};
