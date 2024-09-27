// class-6 >



// const products = [
//     {id: 1, name: 'lenevo', price: 60000},
//     {id: 2, name: 'dell', price: 45000},
//     {id: 3, name: 'hp', price: 40000},
//     {id: 4, name: 'mac', price: 145000},
// ]
// class product{
//     country = 'Bangladesh';
//     constructor(name){
//         this.name = name;
//     }
//     speak(talk){
//         console.log(`talking about ${talk}` )
//     }
// }
// const lenevo = new product('le le lenovo');
// // console.log(lenevo);
// // lenevo.speak('oba kita kow')

// class Teacher{
//     constructor(name, subject){
//         this.name = name;
//         this.subject = subject;
//     }
//     lecture(){
//         console.log('Sir is teaching Math')
//     }
// }
// const jahid = new Teacher('JAHIDUR RAHMAN', 'English');
// console.log(jahid)
// const rashid = new Teacher('Rashidur Rahman', 'Bangla');
// console.log(rashid)

// class Doctor{
//     constructor(name, seva){
//         this.name = name;
//         this.seva = seva;
//     }
//     service(expe){
//         console.log(`doctor is good service ${expe}`);
//     }
// }
// const ami = new Doctor('Mukhlesor Rahman', 'Medicine doctor');
// console.log(ami);
// ami.service('good reviw')


// class-7 >

// class Vehicle{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     move(){
//         console.log('gari chole na chole na chole na re')
//     }
// }
// const janbahon = new Vehicle('gari', 165000);
// // console.log(janbahon)

// class Bus extends Vehicle{
//     constructor(name, price, seat, ticketPrice){
//         super(name, price);
//         this.seat = seat;
//         this.ticketPrice = ticketPrice;
//     }
// }
// const busGari = new Bus(Vehicle, 50, 150);
// console.log(busGari)

// class Truck extends Vehicle{
//     constructor(name, price, load){
//         super(name, price);
//         this.load = load;
//     }
// }


// class-8 --->

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sleep(){
//         console.log(`Sleeping now ${this.name} and age ${this.age}`)
//     }
//     activity(){
//         this.sleep();
//     }
// }
// const kodom = new Person('Kodom Ali', 21);
// const badam = new Person('badam ali', 65);
// console.log(badam)
// badam.sleep();
// console.log(kodom);
// kodom.sleep();

// const lazy = kodom.sleep;
// lazy()

// Dot and bracket notatioin---->

// const person = {
//     name: 'jahid hasan',
//     job: 'gumai thaki',
//     3: '21',
//     'address': 'cumilla'
// }

// console.log(person.name);
// console.log(person['job']);
// console.log(person[3]);
// console.log(person['address'])