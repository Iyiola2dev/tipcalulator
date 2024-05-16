const bill= document.getElementById('bill')
const five= document.getElementById('five')
const ten= document.getElementById('ten')
const fifteen= document.getElementById('fifteen')
const twentyFive= document.getElementById('twentyFive')
const fifty= document.getElementById('fifty')
const tip= document.getElementById('tip')
const total = document.getElementById('total')

bill.addEventListener("input", function(){
   const k = Number(bill.value)
})


const people= document.getElementById('people')
console.log(people)

people.addEventListener("input", function(){
    console.log(people.value)
})
const custom= document.getElementById('custom')
console.log(custom)

custom.addEventListener("input", function(){
    console.log(custom.value)
})




function Tip_Calculator(value){
    const percent = value/100;
    const tipAmount_Person = (Number(bill.value) * percent) / Number(people.value);
    console.log(tipAmount_Person);
   

    const totalPer_person = Number(bill.value) / Number(people.value) + tipAmount_Person;
    console.log(totalPer_person);

    tip.textContent = tipAmount_Person
    total.textContent = totalPer_person

}


five.addEventListener("click", function(){
    Tip_Calculator(5);
})
ten.addEventListener("click", function(){
    console.log(ten)
})
fifteen.addEventListener("click", function(){
    console.log(fifteen)
})
twentyFive.addEventListener("click", function(){
    console.log(twentyFive)
})
fifty.addEventListener("click", function(){
    console.log(fifty)
})



 