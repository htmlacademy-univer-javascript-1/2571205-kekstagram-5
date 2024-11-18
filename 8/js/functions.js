function StringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Cтрока короче 20 символов
StringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
StringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
StringLength('проверяемая строка', 10); // false


function Palindrome(str) {
  str = str.toLowerCase();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Строка является палиндромом
Palindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
Palindrome('ДовОд'); // true
// Это не палиндром
Palindrome('Кекс'); // false


function checkMeetingTime(startTime, endTime, meetingStart, meetingDuration) {
  // Функция для нормализации времени к формату "чч:мм"
  function normalizeTime(time) {
    const parts = time.split(':');
    return parts.map((part) => part.padStart(2, '0')).join(':');
  }

  // Нормализуем все времена
  startTime = normalizeTime(startTime);
  endTime = normalizeTime(endTime);
  meetingStart = normalizeTime(meetingStart);

  // Преобразуем время в минуты для удобства вычислений
  const startTimeMinutes = parseInt(startTime.replace(':', ''), 10);
  const endTimeMinutes = parseInt(endTime.replace(':', ''), 10);
  const meetingStartMinutes = parseInt(meetingStart.replace(':', ''), 10);

  // Вычисляем время окончания встречи в минутах
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем, что время начала и окончания встречи находится в пределах рабочего дня
  return meetingStartMinutes >= startTimeMinutes && meetingEndMinutes <= endTimeMinutes;
}
