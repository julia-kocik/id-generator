const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Tom', 'Simon', 'Ben', 'Peter', 'Bill', 'Bob'];
const femaleNames = ['Julia', 'Mary', 'Cate', 'Ellen', 'Grace', 'Marilyn'];
const lastNames = ['Smith', 'Doe', 'Monroe', 'Santana', 'Kelly'];

const randChoice = (arr) => {
    const rand =  Math.floor(Math.random() * arr.length);
    return arr[rand];
}

//console.log(randChoice(lastNames));

const people = [];

for (let i = 0; i < 10; i++) {
   const obj = {};
   obj.gender = randChoice(genders);
   if(obj.gender === 'M') {
       obj.name = randChoice(maleNames);
   } else if(obj.gender === 'F') {
       obj.name = randChoice(femaleNames)
   };
   obj.lastName = randChoice(lastNames);
   obj.age = Math.floor((Math.random() * 60) + 18);
   people.push(obj);
}

//console.log(people);
//console.log(JSON.stringify(people));
const convertedArr = JSON.stringify(people);

fs.writeFile('people.json', convertedArr, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });