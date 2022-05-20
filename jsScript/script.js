"use strict";
let money,time;
function start(){
    money = +prompt("Ваш бюджет на месяц? ","0");
    while(isNaN(money) || money == null || money == ""){
        money = +prompt("Ваш бюджет на месяц? ","0");
    }    
    time = prompt("Ведите дату в формате YYYY-MM-DD","");
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};
function shooseExpensese(){
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную строку расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
           i--;
    }
}
}
shooseExpensese();

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений","0");
        let percent = +prompt("Под какой процент?","");
        appData.montIncome = save/100/12 * percent;
        alert("Доход с вашего депозита: "+appData.montIncome);
    }
   
}
checkSavings();

//let i = 0;
// do {
//     let a = prompt("Введите обязательную строку расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//          i--;
//     }
//     i++;
// } while (i < 2);
//    while(i < 2){
//     let a = prompt("Введите обязательную строку расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }
//     i++;
// } 



appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

