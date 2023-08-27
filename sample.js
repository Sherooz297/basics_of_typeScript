// "use strict"
// // ==========declaring a variable==============
// var num: string = "Papkistan";
// var a:number = 20;
// var boo:boolean = false
// // ==========declaring the union varibale==============
// var surname: string | number;
// // // ==========functions :no return==============
// const func = (m:number,n:number):void => {
//         console.log(m,n)
// }
// func(120,20)
// // ==========function with return==============
// const func1 = (m:number,n:number):number =>{
//     return m*n
// }
// let sum=func1(12,20)
// console.log(sum)
// // ==========working with type alasis oprator==============
// type UserName = string | number;
// let value:UserName;
// //with function it is similier like the variabale declarion in the c language
// type funDeclaration = (m:number,n:number) => number;  //this line declare the function 
// const func2:funDeclaration = (m,n) =>{
//     return m*n
// }
// let sum1=func2(10,10)
// console.log(sum1)
// // ==========working with the array==============
// let arr:number[] = [12,39,30]   // method 1 to declare the array
// let arr1:Array<string> =  ["aimal","sherooz"]   //this is the second method to declare the array ==using this is best==
// console.log(arr1[0])
// //fixed size array ===touple ==
// let arr2:[number,number,number] = [23,32,32]
// // ==========working with objects ==============
// // const obj : {
// //     myname: string,
// //     age: number,
// // }={
// //     myname:"aimal",
// //     age:23
// // }
// // we can also declare the object using type alisis 
// type Obj = {
//     myname:string,
//     age:number,
//     gender?:boolean   //by adding the ? we can make the field a optional field
// }
// const obj:Obj ={
//     myname:"aimal",
//     age:23,
//     gender:true
// }
// const obj1:Obj ={
//     myname:"sherooz",
//     age:24,
// }
//  ==========the alternative of the type keyword is interface  ==============
// ==========interface is best to use in object+class becouse it can be extended like the class ==============
// interface Obj  {
//     myname:string,
//     age:number,
//     gender?:boolean   
// }
// type myfunc = (m:number,n:number) => void  //here declare the function
// interface newObj extends Obj {     //here i'm extends the newObj from Obj
//     scolor : boolean
//     func: myfunc
// }
// const gigi:newObj = {
//     myname:"aslam",
//     age:34,
//     scolor:false,
//     func: (m,n) => {
//         console.log(m*n)
//     }
// }
// gigi.func(10,20)
