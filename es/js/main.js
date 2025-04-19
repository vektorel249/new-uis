//IIFE : Immediately Invoked Function Expressions
(function () {

    var participants = [];

    var saveButton = document.querySelector("button[va-click=save]");
    saveButton.addEventListener("click", save);

    function save() {
        // ECMASCRIPT vs
        // const ul = document.getElementById("p-list-1");
        // const newListItem = document.createElement("li");
        // newListItem.classList.add("list-group-item");
        // newListItem.innerText = "Can";
        // ul.appendChild(newListItem);

        // const a = { firstName: "Can", lastName: "Perk", birthDate : new Date()};
        
        const p = new Person("Can", "Perk", new Date(1988, 1, 8));
        participants.push(p);
    }

    class Person {
        constructor(firstName, lastName, birthDate) {
            this.firstName = firstName;   
            this.lastName = lastName;
            this.birthDate = birthDate; 
        }
    }
})();


// function save() {
//     alert("kaydettim 2");
// }
/*
var : global scope'ta da geçerli
let : mevcut scope'ta geçerli
const : değiştirilemez tanım
*/

