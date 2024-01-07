/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

translate:
Повертає кількість (кількість) голосних у заданому рядку.
Ми будемо розглядати a, e, i, o, u як голосні для цієї ката (але не y).
Рядок введення складатиметься лише з малих літер та/або пробілів.*/

function getCount(str) {
  let result = 0;
str = str.toLowerCase().trim()
for(let i = 0; i <= str.length; i++) {
  if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
    result += 1;
  }
}
console.log(result) 
}
getCount("o a kak ushakov lil vo kashu kakao");


//   best solution:
function getCountBS(str) {
  str = (str.match(/[aeiou]/ig)||[]).length;
  console.log(str)
}
getCountBS("o a kak ushakov lil vo kashu kakao")
