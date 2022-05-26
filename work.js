// let options={
//     width : 1024,
//     height : 1024,
//     name :"test",
// };
// options.colors = {
//     border : "black",
//     bg : "red",
// };
// console.log(options);
// for(let key in options){
//     if()
//     console.log("свойство "+key+
//                 " имеет значение "+
//                 " "+options[key]);
// }
// let arr = ["first",2,3,"four"];
// arr.forEach(function(item,i,mass){
//     console.log(i+": "+item+" ("+mass+")");
// });
// console.log(arr);

// let mass =[2,4,5,6,8,0];
// mass.push("str");
// mass.shift();
// mass.unshift('fifty');
// mass.forEach(function(item,i,arr){
//     console.log(i+":"+item);
// });
// let ar = prompt("","");
// let mas = [];
// mas = ar.split(",");
// console.log(mas);

// let array = ['first', 'two', 'thre', 'four', 'five'];
// //let mass = array.join(",");
// //console.log(mass);
// array.sort();
// console.log(array);

// let arr = [1,14,3,35,4,45];
// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a,b){
//     return a-b;
// }
let solder= {
    helth : 300,
    armor : 100,
};
let john = {
    helth : 100,
};
john.__proto__ = solder;
console.log(john);
console.log("armor "+john.armor);