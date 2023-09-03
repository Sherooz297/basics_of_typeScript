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


// ===========================function=======================


// type FuncType = (n:number,m:number,l?:number) => number;  //making the parameter optional
 
// const func:FuncType = (n,m,l) => {
//     if(typeof l === "undefined") return n*m
//     return n*m*l;
// }

// func(25,29)


//making the default value of a parameter

// type FuncType = (n:number,m:number,l?:number) => number; 
// const func:FuncType = (n,m,l=20) => {
//     return n*m*l;
// }

// func(25,29)



// ================REST Oprator ======================

// type FuncType = (n:number,m:number,l:number) => number;

// const func = (...m:number[]) => {
//         return m
// }

// func(26,32,32,43,87);




// ==============Function with Object================

// interface Product {          //also can create with interface
//     name:string,
//     stock:number,
//     price:number,
//     photo:string,
//     readonly id:string
// }

// type GetDataType = (product:Product) => void

// const getData:GetDataType =(product) =>
// console.log(product)

// const productOne:Product = {
//     name : "laptop",
//     stock:123,
//     price:20000,
//     photo: "sample pic",
//     id:"18228282828282"
// }

// getData(productOne)


// =============Never Type============= 

// const errorHandler = () => {
//     throw new Error()             //if we use the throw keyword it return the never datatype if use return then not
// }


// =============Classes==============

// class Player {
//      private hieght:number;
//     wight:number;
//     constructor(hieght:number,wight:number){
//             this.hieght = hieght;
//             this.wight = wight;
//     }

//     getHieght = () => {         //bt this method wo can access the private varibales ouside the class
//         return this.hieght
//     }
// }

// const player1 = new Player(12,34)

// console.log(player1.getHieght())


//=======short syntax==========


// class Player {
//     constructor(private hight:number, public wight:number,protected power:number){}  //protcted varibales can be accesed in the sub class
//     getmyhight = () =>{
//        return this.hight
//     }
// }

// //===========extend the class and use of protected variable==========

// const aimal = new Player(22,34,56)
// console.log(aimal.getmyhight())

// class Player2 extends Player{
//     spical:boolean
//     constructor(hight:number,wight:number,power:number,spical:boolean){
//         super(hight,wight,power)
//         this.spical = spical
//     }
//     getpower = () => {
//         return this.power
//     }
// }

// const myData = new Player2(123,432,543,true)

// console.log(myData.getpower())


// =====geter and seter function =========

// class Player {
//     constructor( private hight:number,public wight:number){
//     }
//     get myhight(){
//         return this.hight
//     }
//     set changehight(val:number){
//             this.hight = val;
//     }
// }

// const my = new Player(12,34)

// console.log(my.myhight)
// my.changehight = 100
// console.log(my.myhight)

// =============type asyetion ============
//===============DOM========================


// typescript can not underdtand the DOM so we tell the typescript what are the element they are 


// const btn = document.getElementById("btn") as HTMLElement  //method 1
// btn.onclick




// const btn = document.getElementById("btn")!  //method 2   here we specify that this is not a not value so it would be a html
// btn.onclick


// getting the image and src 

const img = document.querySelector("#img") as HTMLImageElement
img.src
 
























