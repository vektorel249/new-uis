//IIFE : Immediately Invoked Function Expressions
(function () {

    var index = 1;
    var participants = [];
    var selected = [];

    var saveButton = document.querySelector("button[va-click=save]");
    saveButton.addEventListener("click", save);

    //va-array="participants" oaln tüm DOM elementleri
    var participantList = document.querySelectorAll("ul[va-array=participants]");
    var selectedList = document.querySelectorAll("ul[va-array=selected]");

    function updateParticipantsList() {
        participantList.forEach(pl => {
            pl.innerHTML = "";
        });
        participants.forEach(p => {
            participantList.forEach(pl => {
                const newListItem = document.createElement("li");
                newListItem.classList.add("list-group-item");
                newListItem.classList.add("d-flex");
                newListItem.classList.add("justify-content-between");
                const span = document.createElement("span");
                span.innerText = `${p.firstName} ${p.lastName}`;

                const addButton = document.createElement("button");
                addButton.classList.add("btn");
                addButton.classList.add("btn-sm");
                addButton.classList.add("btn-primary");
                addButton.addEventListener("click", () => selectParticipant(p.id))
                const rightIcon = document.createElement("span");
                rightIcon.classList.add("bi");
                rightIcon.classList.add("bi-chevron-right");
                addButton.appendChild(rightIcon);

                newListItem.appendChild(span);
                newListItem.appendChild(addButton);
                pl.appendChild(newListItem);
            });
        });
    }

    function updateSelectedList() {
        selectedList.forEach(pl => {
            pl.innerHTML = "";
        });
        selected.forEach(p => {
            selectedList.forEach(pl => {
                const newListItem = document.createElement("li");
                newListItem.classList.add("list-group-item");
                newListItem.classList.add("d-flex");
                newListItem.classList.add("justify-content-between");

                const span = document.createElement("span");
                span.innerText = `${p.firstName} ${p.lastName}`;
                
                const addButton = document.createElement("button");
                addButton.classList.add("btn");
                addButton.classList.add("btn-sm");
                addButton.classList.add("btn-secondary");
                addButton.addEventListener("click", () => rollbackParticipant(p.id))
                const rightIcon = document.createElement("span");
                rightIcon.classList.add("bi");
                rightIcon.classList.add("bi-chevron-left");
                addButton.appendChild(rightIcon);
                
                newListItem.appendChild(addButton);
                newListItem.appendChild(span);
                pl.appendChild(newListItem);
            });
        });
    }

    function selectParticipant(id) {
        const participant = participants.find(p => p.id === id);

        selected.push(participant);
        participants = participants.filter(p => p.id !== id); // seçtiğimiz hariç diğerleri (yani birini sildik :D)

        updateParticipantsList();
        updateSelectedList();
        /*
        var a = 1;
        var b = "1";

        var c = a == b; => true
        var d = a === b; => false
        var c = a === parseInt(b); => true
        */
    }

    function rollbackParticipant(id) {
        const rollback = selected.find(p => p.id === id);

        participants.push(rollback);
        selected = selected.filter(p => p.id !== id); // seçtiğimiz hariç diğerleri (yani birini sildik :D)

        updateParticipantsList();
        updateSelectedList();
        /*
        var a = 1;
        var b = "1";

        var c = a == b; => true
        var d = a === b; => false
        var c = a === parseInt(b); => true
        */
    }

    function save() {
        // ECMASCRIPT vs
        // const ul = document.getElementById("p-list-1");
        // const newListItem = document.createElement("li");
        // newListItem.classList.add("list-group-item");
        // newListItem.innerText = "Can";
        // ul.appendChild(newListItem);

        const txtFirstName = document.getElementById("txtFirstName");
        const txtLastName = document.getElementById("txtLastName");
        const txtBirthDate = document.getElementById("txtBirthDate");
        // const a = { firstName: "Can", lastName: "Perk", birthDate : new Date()};

        const p = new Person(txtFirstName.value, txtLastName.value, new Date(txtBirthDate.value));
        participants.push(p);
        updateParticipantsList();
    }

    class Person {
        constructor(firstName, lastName, birthDate) {
            this.id = index++;
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

