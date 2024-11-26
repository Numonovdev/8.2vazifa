// // 1) Interfeys va Ob'ektlarni Yaratish
// // 1.1)
// interface Person {
//     name: string,
//     age: number,
//     isStudent: boolean
// }

// // 1.2)
// let person: Person ={
//     name: "John Doe",
//     age: 25,
//     isStudent: false
// }

// // 1.3)
// interface Book {
//     title: string,
//     author: string,
//     publishedYear: number
// }

// // 1.4)
// let book: Book ={
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925
// }


// // 2) Massivlar bilan ishlash
// // 2.1)
// let number: Number[] =[]
// number.push(1,2,3,4,5)

// // 2.2)
// function yigindi(numbers: number[]): number {
//     let num: number = numbers.reduce(function (yig, value) {
//         return yig + value;
//     }, 0); 
//     return num; 
// }

// // 2.3)
// // let str: string[] = ["apple", "banana", "cherry"];

// // function Big(str:string[]): string[] {
// //     let str2: string[] = []
// //     str.filter(function (value: string) {
// //         str2.push(value[0].toUpperCase)
// //     })
// //     return str2
// // }


// // 4.any
// // 4.1)
// let example1: any = 'salom';
// example1 = 4;
// example1 = true;

// // 4.2)
// let array1: any[] = ['salom', 5,true,undefined]
// function a1(array1:any[]): any {
//     array1.forEach(function (value) {
//         console.log(value);
        
//     })
// }


// // 5.unknown
// // 5.1)
// let unknow: unknown = true;
// unknow = 5;
// unknow = 'salom';

// // 5.2)
// function changeUnknow(unknow:unknown): unknown {
//     let str: string = ''
//     if (typeof unknow == 'string') {
//         str = unknow
//     }else{
//         str = String(unknow)
//     }
//     return str
// }


// // 7.funksiyalar
// function addNumbers(a:number, b: number): number {
//     return a + b
// }




// // 8.Enum
// // 8.1)
// enum DaysOfWeek {
//     mondey = `Monday`, 
//     tuesday = `Tuesday`, 
//     wednesday = `Wednesday`, 
//     thursday = `Thursday`, 
//     friday = `Friday`, 
//     sturday = `Saturday`, 
//     sunday = `Sunday`
// }

// // 8.2)
// function printDay(DaysOfWeek: enum) {
//     Object.values(DaysOfWeek).forEach(function (value) {
//         console.log(value);
//     })
// }


// // 9. Intersection
// // 9.1

// interface Person2 {
//     name: string,
//     age: number
// }

// interface Employe {
//     employeeId: number,
//     department: string
// }

// // 9.2
// type Worker1 = Person2 & Employe  

// // 9.3)
// let worker: Worker1 = {
//     name: "Jane Doe",
//     age: 30,
//     employeeId: 12345,
//     department: "HR"
// }

// // 10.Interface
// // 10.1)
// interface Vehicle{
//     make: string
//     model: string
//     year: number
// }

// // 10.2)
// interface Car  extends Vehicle{
//     numberOfDoors: number
//     isElectric: boolean
// }
// // 10.3)
// let car: Car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2024,
//     numberOfDoors: 4,
//     isElectric: true
// }

// // 11.Type Alias
// // 11.1)
// type Addres ={
//     street: string,
//     city: string,
//     postalCode: string
// }

// // Aralash mashqlar
// // 12.Obyekt, Funksiya va Tupleni Aralashtirib Ishlash
// // 12.1)
// interface Student2 {
//     name: string,
//     age: number,
//     grades: number[],
//     address: [string,number]
// }



// // 13.Enum, Type Alias va Intersectionni Aralashtirib Ishlash
// // 13.1)
// enum OrderStatus {
//     Pending, 
//     Shipped,
//     Delivered,
//     Cancelled
// }
// // 13.2)
// interface Order{
//     orderId: number,
//     status: OrderStatus,
//     totalAmount: number
// }
// // 13.3)
// interface Customer {
//     customerId: number,
//     name: string
// }

// // 13.4)
// type CustomerOrder = Order & Customer

// // 13.5)
// let user : CustomerOrder ={
//     orderId: 456,
//     status: OrderStatus.Shipped,
//     totalAmount: 150.00,
//     customerId: 789,
//     name: "Sarah"
// }