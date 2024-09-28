// class-1

// const {z, y, ...others} = {x: 2, y: 5, z: 9, name: 'jahid'}
// console.log(others)

// ----------------------------------------------------------------------------
// class-2 > data access

// const data = [{
//     id: 1,
//     name: 'abul',
//     address:[{
//         current:{
//             distric: 'cumilla',
//             upzilla: 'chandina',
//             village: 'elliotgang'
//         },
//         permanent:{
//             village:'muradnagar'
//         },
//     }],
//     class: 'six',
//     medel:{
//         first: 'golden',
//         second: 'rupa',
//         third: 'dimond'
//     }
// }];
// console.log(data[0].address[0].permanent)


// const data = {
//     id: 1,
//     name: 'abul',
//     address:{
//         current:{
//             distric: 'cumilla',
//             upzilla: 'chandina',
//             village: 'elliotgang'
//         },
//         permanent:{
//             village:'muradnagar',
//             para: 'moddhopara'
//         },
//     },
//     class: 'six',
//     medel:{
//         first: 'golden',
//         second: 'rupa',
//         third: 'dimond'
//     }
// };

// const data2 = {
//     id: 1,
//     name: 'abul',
//     address:{
//         current:{
//             distric: 'cumilla',
//             upzilla: 'chandina',
//             village: 'elliotgang'
//         },
        
//     },

// }
// console.log(data.address.permanent.para)
// console.log(data2.address.permanent?.para)
    
// --------------------------------------------------------------------------------

// class-3 > map

// const numbers = [2, 4, 6, 8];
    
// function doubleIt(num){
//     console.log('num now', num)
//     return num * 2;
// }

// const double = numbers.map(doubleIt);
// console.log(double)
// const double2 = n => n * 2;
// const double = numbers.map(double2);
// const double3 = numbers.map(n => n*2)
// console.log(double3)

//  const doubled = [];
//  for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
//  }
// console.log(doubled)


// const numbers = [2, 4, 6, 8, 10];

// const double = numbers.map(num => num / 2);
// const double2 = numbers.map(num => num + 5);
// console.log(double)
// console.log(double2)


// const friends = ['jahid', 'hasan', 'kamrul', 'tom', 'kim'];


// const length = friends.map(frnd => frnd.length);
// const firstLetter = friends.map(frnd => frnd[2]);
// console.log(length)
// console.log(firstLetter)

// const names = ['hablu', '868', 'jahid'];

// const name = names.map(nam => nam[1])
// console.log(name)



// class-4 > 

// 1. forEach-->

// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.forEach(n => console.log(n));
// console.log(result)

// const double = numbers.forEach(num => console.log(num / 2));
// console.log(double)


//  2.filter--->

// const numbers = [2, 4, 6, 8, 10];
// const player = [45, 65, 78, 47, 90, 67];

// const select = player.filter(height => height > 90);
// const select = player.filter(height => height > 70);
// const select = player.filter(p => p % 2 === 0);
// const select = player.filter(p => p % 2 === 1);
// const select = player.filter(p => p % 2 === 1);
// console.log(select)


// const friends = ['jahid', 'hasan', 'kamrul', 'tom', 'kim'];
// const oddFriends = friends.filter(odd => odd.length % 2 === 1)
// console.log(oddFriends)


//  3.find --->
// const friends = ['jahid', 'hasan', 'kamrul', 'tom', 'kim'];
// const oddFriends = friends.find(odd => odd.length % 2 === 1)
// console.log(oddFriends)


// class-5 >

//  4.reduce --->

// const numbers = [2, 4, 6, 8, 10, 78, 34];

// // const sum = numbers.reduce((previous, current) => previous + current, 0);
// const minus = numbers.reduce((previous, current) => previous * current, 0)
// console.log(minus)

// const products = [
//     {id: 1, name: 'lenevo', price: 60000},
//     {id: 2, name: 'dell', price: 45000},
//     {id: 3, name: 'hp', price: 40000},
//     {id: 4, name: 'mac', price: 145000},
// ]

// map
// const name = products.map(product => product.name);
// console.log(name)

// forEach
// products.forEach(p => console.log(p.id))

// filter
// const price = products.filter(p => p.price > 40000);
// console.log(price)

// find
// const price = products.find(p => p.price < 50000);
// console.log(price)

// reduce
// const total = products.reduce((accum , current) => accum + current.price, 0);
// console.log(total)

// example of syntax------------>

// let x = 'salman;
// console.log(x)

// console.log('hello, world!';
    
// for(Let i = 0; i < 5; i++){
//     console.log(i)
// }

// const for = 0;
// function add(a, b{
//     return a+ b;
// }

// let number = 42;
// number()

// let user;
// console.log(user.name)

// let numbers = 45;
// numbers.toUpperCase();

