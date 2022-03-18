let allObjects = [];
let allUsers = [];

    var retrieveObj = document.cookie;
    allObjects = retrieveObj.split("~");
    for(let i=0;i<allObjects.length-1;i++){
        let user = allObjects[i].split(",");
        let obj = {};
        obj.userName=user[0];
        obj.age=user[1];
        obj.gender=user[2];
        obj.phone=user[3];
        obj.city=user[4];
        obj.email=user[5];
        obj.firstVaccinationDate=user[6];
        obj.secondVaccinationDate=user[7];
        obj.nextVaccinationDate=user[8];
        allUsers.push(obj);
    }

let currentObj = {};

document.querySelector("#login").addEventListener("click", e => {
    var enteredEmail = document.querySelector("#loginEmail").value;
    let checkPresent = false;
    allUsers.forEach(element => {
        if(element.email === enteredEmail) {
            currentObj = element;
            checkPresent = true;
        }
    });
    if(checkPresent === false) {
        alert("Kindly register first");
    } else {
        location.href = "index2.html?name=" + currentObj.email;
    }
})

document.querySelector("#register").addEventListener("click", e => {
    location.href = "index.html";
})