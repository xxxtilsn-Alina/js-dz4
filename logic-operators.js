// 1.

const mood = prompt("Як ваш настрій?");
const day = prompt("Зрозуміло, а день як пройшов?");
const result = Boolean(mood) === true && Boolean(day) === true;
console.log(result);

if (result) {
  alert(`Обидва поля заповнені`);
} else {
  alert(`Не всі поля заповнені`);
}

// 2.

const number1 = prompt("Якесь число ");
const number2 = prompt("ще якесь число ");
const numbers = Number(number1) + Number(number2);
console.log(numbers);

if (numbers > 10) {
  alert(`Сума більша за 10`);
} else {
  alert(`Сума менша або дорівнює 10`);
}

// 3.
const text = prompt("хто створив JavaScript");
const textOfe = text.indexOf("JavaScript");
console.log(textOfe);

if (textOfe) {
  alert(`Текст не містить слово JavaScript`);
} else {
  alert(`Текст  містить слово JavaScript`);
}

// 4.

const field = prompt("ввeдіть число please");
const fieldResult = field > 10 && field < 20;
console.log(fieldResult);

if (fieldResult) {
  alert(`Число входить в діапазон від 10 до 20`);
} else {
  alert(`Число не входить в діапазон від 10 до 20`);
}

// 5.
// Створити розмітку з формою з полями введення та кнопкою.
// При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так,
// то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку.
//  Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

const email = prompt("Введіть електрону адресу");
const name = prompt("Введіть і'мя");
const password = prompt("Введіть пароль");

if (
  email.includes("@") &&
  email.includes(".") &&
  name.length >= 3 &&
  password.length >= 6
) {
  alert("Дані введено вірно");
} else {
  alert("Помилка! Перевірте дані");
}
