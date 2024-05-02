// const arr = [
//     {
//         name: 'Sardor',
//         age: 14
//     },
//     {
//         name: 'Diyor',
//         age: 15
//     },
//     {
//         name: 'Daler',
//         age: 17
//     },
//     {
//         name: 'Amir',
//         age: 20
//     },
//     {
//         name: 'Amir',
//         age: 14
//     }
// ];

// map - Проходить по каждому элементу массива

// arr.map((item, idx) => {
//     console.log(idx);
//     item.age++;
// });

// console.log(arr);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// numbers.map((item) => {
//     if (item % 5 === 0 && item % 3 === 0) {
//         console.log(item, 'fizzbuzz');
//     } else if (item % 3 === 0) {
//         console.log(item, 'buzz');
//     } else if (item % 5 === 0) {
//         console.log(item, 'fizz');
//     }
// })

// const even = numbers.filter((item) => {
//     if (item % 2 === 0) {
//         return item;
//     }    
// })

// const even = numbers.filter((item) => item % 2 === 0);
// const odd = numbers.filter((item) => item % 2 !== 0);

// console.log(even);
// console.log(odd);

let index = prompt()
index = Number(index);
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
if (index >=0 && index < arr.length){
    arr.splice(index, 1)
    alert(arr)
} else {
    alert(`Нет такого элемента с индексом ${index} `)
}
