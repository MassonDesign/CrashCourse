// simple data type
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// array type
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

//other way to assigne type to array
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'Hello'.slice(0, 3);
myNum = 5.5;
myBool = true;
myVar = false;

strArr = ['Hello', 'world'];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ['hello', 4];

let myVoid: void = null;
let myNull: null = undefined;
let myUndefined: undefined = undefined;

console.log(myVoid);