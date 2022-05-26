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
    savings: true,
    shooseExpenses : function(){
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
    },
    detecteDayBudget: function(){
        appData.moneyPerDay = appData.budget / 30;
        lert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений","0");
            let percent = +prompt("Под какой процент?","");
            appData.montIncome = save/100/12 * percent;
            alert("Доход с вашего депозита: "+appData.montIncome);
        }
    },
    chooseOptExpenses(){
        for(let i=1; i<3; i++){
            let opt = prompt("Статья необязательных расходов","");
            appData.optionalExpenses[i] = opt;
            
        }
    },
    chooseIncome(){
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую','');
        appData.income = items.split(', ');
        appData.income.push(prompt("Можен что-то еще?"));
        appData.income.sort();

    }
};

