import logo from './logo.svg';
import './App.css';
import {add, multiply, substract} from './mathematics.js';
// var a=30;
// class Student {
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }

//  }

//  class Animal{
//   eat=()=>{
//     return "eating";
//   };
// }
//   class Dog extends Animal{
//     bark=()=>{
//       return "barking";
//     };
//   }
//   const d =new Dog(); 
 
function App() {
//   var b=20;
   
//  var stu1=new Student("Anisha",20);
  
//   const add=(a,b)=> {
//     return (a+b);
//   }
//   var x=30;
//   const cel_to_fah=(x)=>{
//     return ((9/5)*x+32);
//   }
// class parent{
//   show=()=>{
//     return("it is  the show() method of parent class.")
//   }
// }
// class child extends parent{
//   show=()=>{
//     return(`child method : it is the show() method of child class.\n child method: ${super.show()}`);
    
//   }
// }
// var obj=new child();

//ARRAYS

// var arr1=['c ','c++ ','python ','html'];
// var arr2=["java ","javscript "];
// var arr3=[" react "];
// var result =arr1.concat(arr2,arr3);
// var result1=arr2.concat("hindi","english");
// var c=arr3.concat("hindi","english");
// c.push("french");
// c.pop();
// var res=arr1.copyWithin(0,1,2);


// var name=["aanu","ram"];
// var abc=[1,2,3,4];
// const sum=(a,b,c,d)=>{
//   return(a+b+c+d);
// }


//spread operator
//  var abc=[1,2,3,4];
//  const mul=(a,b,c,d)=>{
//   return a*b*c*d;
//  }

//  var a=mul(...abc);
//  var abcd=[0,...abc,5,6];

//  const time=(a)=>{
//   return 10*a;
//  }
var a=[0,1,2,3,4,5];
const increase=(a)=>{
  return 1000+a;
}


//OBJECT DESTRUCTING
// const person={
//   Name:"kedar",
//   Age:45,
// }

// class Student{
//   show(){
//     return "this is parent class";
//   }
// }
// class child extends Student{
//   show(){
//     return "this is child class";
//   }
//   supershow(){
//     return super.show();
//   }
// }
// var obj=new child();

//static member function inside class..

// class student{
//   static add(x,y){
//     return x+y;
//   }
//   static mul(x,y){
//     return x*y;
//   }

// }

// OBJECT DESTRUCTURING

const student={
  firstname:"john",
  lastname:"doe",
  age:7,
  email:"abc@gmail.com"
}
let {email,lastname}=student;
  return (
    <>
    {/* <p>The value of a is:{a}</p>
    <p>The value of a+b is: {a+b}</p>
     <p>arrow function sum results: {add(a,b)}</p>
    
     <p> the fahrenhite value of {x} is : {cel_to_fah(x)}</p>
      
    <p> the dog is : {d.bark()}</p>
     
  <p> The name of the student is :{stu1.name} and age is : {stu1.age}</p> */}
{/* <p> {obj.show()}</p> */}
{/* <p>{document.writeln(result)}</p> */}

{/* <p>{document.writeln(result1)}</p> */}
{/* <p>value:{result}</p>*/}
{/* <p>{document.writeln(c)}</p> */}
{/* <p>{c}</p> */}
{/* <p>{res}</p> */}
{/* <p> the multiplication of array abc is : {a}</p>
<p> the value of array is: {abcd.join(" ,")}</p>
<p> the value of new array  is: {abcd.map(time).join(" ,")}</p>
<p>{mul.apply(null,abc)}</p>
<p> the new result of array is: {abcd.map(Math.sqrt)}</p> */}
{/* <p>value:{res}</p>  */}
{/* <p> the value of original array  is: {a.join(", ")}</p>
<p> the value of new array  is: {a.map(increase).join(" ,")}</p> */}
{/* <p>{name.join(" ")}</p>
<p>{abc.map(Math.sqrt).join(" ,")}</p>
<p>the sum of the array is: {sum(...abc)}</p> */}
{/* <p>{obj.show()}</p>

<p>{obj.supershow()}</p> */}


{/* <p>the value of sum is:{student.add(4,6)}</p>
<p>the value of mutiplication is:{student.mul(4,6)}</p> */}

{/* //OBJECT DESTRUCTURING */}
{/* 
<p>the email id of student is :{student.email}</p>
<p>the lastname of student is :{student.lastname}</p>

{/* exporting function from another file (from mathematics.js)*/}
{/* <p>the sum of two numbers is:{add(2,3)}</p>
<p>the difference of two numbers is:{substract(2,3)}</p>
<p>the multiplication of two numbers is:{multiply(2,3)}</p> */}
  </>
);
} 

export default App;
