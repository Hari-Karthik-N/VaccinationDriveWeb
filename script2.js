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

    let currentObj = {};

    let currentUserEmail = (getParameterByName("name"));

    allUsers.forEach(element => {
        if(element.email === currentUserEmail) {
            currentObj = element;
        }
    });

    console.log(currentObj.userName);

    document.querySelector("#vaccinateToday").addEventListener("click", e => {
        currentObj.firstVaccinationDate = "today's date";
        currentObj.nextVaccinationDate = "secondVDate";
        alert("you have successfully vaccinated today!");
        updateCookies();
    })

    document.querySelector("#getNextVaccinationDate").addEventListener("click", e => {
        alert("your next Vaccination date is: " + currentObj.nextVaccinationDate);
    })

    document.querySelector("#getDetails").addEventListener("click", e => {
        var userDetails = "name:\n" + currentObj.userName + "\n\n" + "age:\n" +  currentObj.age + "\n\n" + "gender:\n" +  currentObj.gender + "\n\n" + "phone:\n" +  currentObj.phone + "\n\n" + "city:\n" +  currentObj.city + "\n\n" + "email:\n" +  currentObj.email + "\n\n" + "1st vaccination:\n" +  currentObj.firstVaccinationDate + "\n\n" + "2nd vaccination:\n" +  currentObj.secondVaccinationDate + "\n\n" + "next Vaccination:\n" +  currentObj.nextVaccinationDate;
        alert(userDetails);
    })

    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function updateCookies() {
        document.cookie = "";
        allUsers.forEach(element => {
            document.cookie += element.userName + "," + element.age + "," + element.gender + "," + element.phone + "," + element.city + "," + element.email + "," + element.firstVaccinationDate + "," + element.secondVaccinationDate + "," + element.nextVaccinationDate + "-";
        });
    }