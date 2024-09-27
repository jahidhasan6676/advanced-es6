// practice-1 > map
// const array = [1, 3, 5, 7, 9];

// const even = array.map(p => p + 1);
// console.log(even)

// for loop >
// const array = [1, 3, 5, 7, 9];

// // for(let arr of array){
// //     let even = arr + 1;
// //     console.log(even)
// // }

// for(let i = 0; i < array.length; i++){
//     let even = array[i] + 1;
//     console.log(even)
// }

// practice-2 > filter

// const array = [33, 50, 79, 78, 90, 101, 30];

// const divisible1 = array.filter(num => num % 10 === 0);
// const divisible2 = array.find(num => num % 10 === 0);
// console.log(divisible1);
// console.log(divisible2)

// task-3 >
// const instructor = [
//     {name: 'Nodi', age:28, position:'Senior'},
//     {name: 'Akil', age:26, position:'Junior'},
//     {name: 'Shobuj', age:30, position:'Senior'},
// ]

// const Senior = instructor.filter(p => p.position.includes('Senior'));
// console.log(Senior)

// practice-4 > reduce
// const people = [
//     {name: 'Meena', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22},
// ]

// const sum = people.reduce((previous, current) => previous + current.age, 0);
// console.log(sum)

// for loop-->
// const year1 = people[0].age;
// const year2 = people[1].age;
// const year3 = people[2].age;

// const sum = year1 + year2 + year3;
// console.log(sum)