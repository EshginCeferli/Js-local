//1) 3 ve 7 ye bolunen

// CheckNum(25)

// function CheckNum(num) {
//     if (num % 21 == 0) {
//         console.log("Is dividable");
//     }
//     else {
//         console.log("Undividable");
//     }
// }
// CheckNum(25)


//2) Faktorialin tapilmasi

// let result = 1;

// function Factorial(num) {
//     if (num < 0) {
//         console.log("Please add positive number");
//     }
//     else {
//         for (let i = 1; i <= num; i++) {
//             if (num > 0) {
//                 result *= i;
//             }
//         }
//         console.log(result);
//     }
// }
// Factorial(3)


// 3) Cut ededlerin kvadrati

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// function Sum(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {
//             sum += Math.pow(arr[i], 2);
//         }
//     }
//     console.log(sum);
// }

// Sum(numbers)


// 4) Mail ve passwordun yoxlanilmasi

// let mail = "eshqin@code.edu.az";
// let password = "12345";

// function CheckMail(email, pass) {
//     if (email == mail && pass == password) {
//         console.log("Giris olundu");
//     }
//     else {
//         console.log("Mail ve Passowrd sehvdir")
//     }
// }
// CheckMail("eshqin@code.edu.az", "12345")

//5) Tek ededlerin cemi

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;

// function SumOfOdds(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 != 0) {
//             sum += nums[i]
//         }
//     }
//     console.log(sum);
// }

// SumOfOdds(arr);

//6) Cut ededlerin sayi

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let count = 0;
// function CountOfEvens(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// CountOfEvens(arr);



