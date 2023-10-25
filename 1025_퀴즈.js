//Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
}

//Q2. make a string out of a string
{
    const fruits = '🍎, 🍌, 🍊,🍈';
}

//Q3. make this array look like this: [5, 4, 3, 2, 1]
    const array = [1, 2, 3, 4, 5]

//Q4. make new array without the fruits two elements
{
    const array = [1, 2, 3, 4, 5];
}

class Student {
    constructor(name, age, enrolled, score)  {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const student = [
    new student('A', 29, true, 45),
    new student('B', 28, false, 80),
    new student('C', 30, true, 90),
    new student('D', 40, false, 66),
    new student('E', 18, true, 88),
];

//Q5. find a student with the score 90
{
    const result = student.find(function (student, index) {
        return student.score ===90;
    });
    console.log(result);
}
