// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1
const printEveryWord = (words) => {
  return words.forEach((word) => console.log(word))
};

// Problem 2
const getStringLengths = (strings) => {
  return strings.map((word) => word.length)
};




// Problem 3
const sortWordsZtoA = (words) => {
return words.reverse().sort((a, b) => a - b)
};

/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
 return nums.filter((num) => num % 2 === 0)
};


// Problem 5
const getLargestNumber = (numbers) => {
return numbers.reduce((acc, curr) => acc > curr ? acc : curr , numbers[0])
};



/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6
const printUserNamesAndScores = (users) => {
return users.map((user) => `${user.name} scored ${user.score} points.`)
};




// Problem 7
const getUserNames = (users) => {
return users.map((names) => names.name)
};


// Problem 8
const getActiveUsersUnder30 = (users) => {
return users.filter((active) => active.age < 30 && active.isActive)
};





// Problem 9
const getTotalScore = (users) => {
return users.reduce((acc, curr) => acc + curr.score, 0  )
};


// Problem 10
const sortUsersByScoreDescending = (users) => {

};
