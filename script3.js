let allObjects = [];
let allUsers = [];

    var retrieveObj = document.cookie;
    allObjects = retrieveObj.split("-");
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
    console.log(allUsers);
    
    document.querySelector("#allRegUsers").addEventListener("click", e => {
        let allRegUsers = "";
        allUsers.forEach(element => {
            allRegUsers += element.email + "\n\n";
        });
        alert(allRegUsers);
    })

    
    document.querySelector("#allVaccinatedUsers").addEventListener("click", e => {
        let allVaccinatedUsers = "";
        allUsers.forEach(element => {
            if(element.firstVaccinationDate === "today's date") {
                allVaccinatedUsers += element.email + "\n\n";
            }
        });
        alert(allVaccinatedUsers);
    })
    
    document.querySelector("#nonVaccinatedUsers").addEventListener("click", e => {
        let nonVaccinatedUsers = "";
        allUsers.forEach(element => {
            if(element.firstVaccinationDate === "") {
                nonVaccinatedUsers += element.email + "\n\n";
            }
        });
        alert(nonVaccinatedUsers);
    })