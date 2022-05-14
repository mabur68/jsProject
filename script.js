"use strict";
let person = {
    name:"Michael",
    age: 50,
    show: function(){
        console.log(this.name+" "+this.age);
    }
}
console.log(person.name);
console.log(person.age);
person.show();