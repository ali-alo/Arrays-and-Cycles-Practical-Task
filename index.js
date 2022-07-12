// 1. Given an array consisting of movie names, iterate over the array with the output
// of the names of each movie to the console

const movies = ["Spider Man", "Interstellar", "The Godfather", "Godzilla"];
movies.forEach((movie) => console.log(movie));

// 2. Given an array of car manufacturers, convert the array to a string and back to an array
const carManufacturers = ["BMW", "KIA", "Tesla", "Mercedes", "Bentley"];
let carString = "";
carManufacturers.forEach((manufacturer) => (carString += manufacturer + " "));
carString = carString.trim(); // get rid off empty space at the end

const backToArray = carString.split(" "); // convert back to array

// 3. Given an array of the names of your friends, add the words hello to each element of the array
const friends = ["Sergey", "Iskander", "Maxime", "Danil"];
const helloFriends = friends.map((friend) => `Hello ${friend}!`);

// 4. Convert numeric array to Boolean
const numbers = [3, 5, 8, -5, 0, 55.2, 88, 0];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = Boolean(numbers[i]);
}

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order
const unsortedList = [1, 6, 7, 8, 3, 4, 5, 6];
unsortedList.sort((a, b) => b - a);

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3
const nums = [1, 6, 7, 8, 3, 4, 5, 6];
const filteredNums = nums.filter((num) => num > 3);

// 7. Write a function that takes two parameters - an array and a number and outputs
// the index of an array element equal to a number
function getIndexOfNumber(arr, num) {
  return arr.indexOf(num);
}

// 8. Implement a loop that will print the number 'a' until it is less than 10
for (let i = 0; i < 10; i++) console.log("a");

// 9. Implement a loop that prints prime numbers to the console
for (let i = 1; i < 200; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log(i);
}

// 10. Implement a loop that prints odd numbers to the console
for (let i = 1; i < 200; i += 2) console.log(i);
