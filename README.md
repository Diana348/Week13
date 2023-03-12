# Week13
/ -------------- 1 Вопрос -------------- /
let date = new Date(2011,0,24,22,51,0,0);
console.log(date);


/ -------------- 2 Вопрос -------------- /
getDay() возвращает день недели начиная от 0 (воскресенья) до 6 (субботы).


/ -------------- 3 Вопрос -------------- /
let today = Date.parse('2023-02-10T00:51:50.417+07:00');
let yesterday = Date.parse('2023-02-11T00:00:00.000+07:00');
let difference = yesterday - today;
console.log(difference);


/ -------------- 4 Вопрос -------------- /
getDate() помогает получить информацию из обьекта Date, а именно день месяца (от 1 до 31)


/ -------------- 5 Вопрос -------------- /
let d = new Date(2016, 2, 9);

console.log(d); // Wed Mar 09 2016 00:00:00 GMT+0700 (Красноярск, стандартное время) 


/ -------------- 6 Вопрос -------------- /
getTimezoneOffset() возвращает разницу в минутах между местным временем и временем по UTC.


/ -------------- 7 Вопрос -------------- /
let date = new Date();

console.log(date.getUTCHours()); // 18 - время в поясе UTC+0


/ -------------- 8 Вопрос -------------- /
getHours() помогает получить информацию из обьекта Date, а именно часы



/ -------------- 9 Вопрос -------------- /
let d = new Date(); 
let y =  d.getFullYear();

console.log(y); // 2023 - год в формате 4 цифр из обьекта d


/ -------------- 10 Вопрос -------------- /
let y = new Date(); 
let d = y.getDate();
console.log(d);

непонятно зачем присваивать из переменной Y дату к новой переменной D и выводить это в консоль.
можно сделать проще:
let y = new Date(); 
console.log(y.getDate());




/ --------------- Задание со звездочкой **** ---------------- /
function formatDate (date) {
  let day = date.getDay();
  let month = date.getMonth()+1;
  let year = date.getFullYear();
  let hour = date.getHour();
  let minutes = date.getMinutes();
  let differentMs = newDate() - date;
  let differentSec = Math.round(differentMs/1000);
  let differentMin = differentSec/60;
  let differentHour = differentMin/60;

  if (differentSec < 1) {
    return 'прямо сейчас';
  } else if (differentMin < 1) {
    return `${differentSec} сек. назад`
  } else if (differentHour < 1) {
    return `${differentMin} мин. назад`
  } else {
    return `${day}.${month}.${year} ${hour}:${minutes}`
  }
}
