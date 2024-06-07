//Part 1: Refactoring Old Code
//Doing the for loop way
//it works and i hate every second of it

let CSVdata =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let CSVarray = [];
let element = [];
let temp = "";
let columns = CSVarray;
let colLength;
//to get the last remain row
CSVdata = CSVdata + "\n";

//parsing into array
for (let index = 0; index < CSVdata.length; index++) {
  //separate by ',' into array
  if (
    !(CSVdata[index] == "," || CSVdata[index] == "\r" || CSVdata[index] == "\n")
  ) {
    temp += CSVdata[index];
  } else {
    element.push(temp);
    temp = "";
  }
  //when see line break, push the current element into CSVarray
  if (!(CSVdata[index] == "\r" || CSVdata[index] == "\n")) {
    continue;
  } else {
    CSVarray.push(element);
    element = [];
  }
}
console.log("CSVarray (for loop):\n", CSVarray, "\n");

/////////////////////////////////////////////////////////////////////
//Part 2: Expanding Functionality
//doing the .split way
let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//create array of the array of people
let newArray = csv.split("\n");
let dataArray = [];
for (let index = 0; index < newArray.length; index++) {
  let data = newArray[index].split(","); //split the array within the newArray
  dataArray.push(data);
}
console.log("dataArray (.split):\n", dataArray, "\n"); //gives array of array

let cellHeaders = [];
let numOfColumns = dataArray[0].length;
for (let index = 0; index < numOfColumns; index++) {
  cellHeaders.push(dataArray[0][index].toLowerCase()); //make string lower case before pushing
}
console.log("cellHeaders:\n", cellHeaders, "\n"); //gives first row of array of array

//Part 3: Transforming Data
let objectArray = [];
//start from index of 1 to get rid of first row which are the headers
for (let index = 1; index < dataArray.length; index++) {
  let row = dataArray[index];
  const object = {};
  for (let j = 0; j < cellHeaders.length; j++) {
    object[cellHeaders[j]] = row[j]; //object.key = value creates new property
  }
  objectArray.push(object);
}
console.log("objectArray:\n", objectArray, "\n"); //gives array of objects

//Part 4: Sorting and Manipulating Data
//Remove the last element from the sorted array.
objectArray.pop();
//Insert the following object at index 1:
objectArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
//Add the following object to the end of the array:
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log("transformed objectArray:\n", objectArray, "\n");

//average age of group
let avgAge;
let sumAge = 0;
for (let index = 0; index < objectArray.length; index++) {
  let age = objectArray[index].age;
  sumAge += parseInt(age);
}
avgAge = sumAge / objectArray.length;
console.log("average age: \n", avgAge, "\n"); //average age is 50.8

//Part 5: Full Circle
let keys;
let arr = [];

for (let index = 0; index < objectArray.length; index++) {
  keys = Object.keys(objectArray[index]);
  arr.push(Object.values(objectArray[index]));
}
arr.unshift(keys);
//console.log(arr); //gives converted to array of objects

let csvString = "";
for (let index = 0; index < arr.length; index++) {
  csvString += arr[index] + "\n";
}

console.log("csvString:\n", csvString, "\n"); //gives csv syntax of data
