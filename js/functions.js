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
