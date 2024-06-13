//        "CODING CHALLENGE"



//Day 18 coding challenge.
//Question 1:Make a smart phone object
//Detailes about phone.
let smartPhone = {
    make:"Samsung",
    model:"Galaxy S21",
    specs: {
        storage:"128GB",
        screenSize:"6.2 inches",
        batteryLife:"18 hours"
    }
};

console.log(smartPhone);


//Question 2:Pulling Apart a Nested Object.
//List showing programmer skills in details.
let developerSkills = {
    languages:["Javascript","Typescript","Python"],
    frameWorks:["React","Angular","Vue"],
    tools:["Git","Webpack","Docker"]
};

let {languages,frameWorks,tools} = developerSkills;

console.log(`Language:${languages[0]}, Framework: ${frameWorks[0]},Tool: ${tools[0]} `);


//Question 3:Making Flexible Object Keys.
function createObjectWithDynamicKey (key: string, value: string)  {
    let dynamicObject:any = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("Theme","dark");
console.log(userPreference);



//                              "DAY 19"
//Question 1:Doubles numbers in an arrays.
//Start with the list of numbers.
let numbers = [1,2,3,4,5];

//Doubles each number.
let doubleNumbers = numbers.map(number => number * 2);

//Shows the new list of doubled numbers.
console.log(doubleNumbers); //output:[2,4,6.8.10]



//Question 2:Keep only string:Given a mix of different types of items,make a new list that has only the words.
//A mix bag of items
let mixArray = [1, "Apple", 2, "Banana", true, "Carrot"] ;

let stringsArray = mixArray.filter(item => typeof item === "string");

console.log(stringsArray);//output: ["Apple", "Banana", "Carrot"]



//Question 3:Find Average Grade:Given a list of Grades, calculate the average grade.

let grades = [88,94,72,99,53,77];

let averageGrade = grades.reduce((total,grade) => total + grade, 0)  / grades.length;

console.log(averageGrade);  //first,we add up all the grades.then we divide by how mang grades there are  to
//get the average.