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
    console.log(allUsers);

    let currentUserEmail = (getParameterByName("name"));

    allUsers.forEach(element => {
        if(element.email === currentUserEmail) {
            currentObj = element;
        }
    });
    
    document.querySelector("#allRegUsers").addEventListener("click", e => {
        location.href = "index4.html?name=allRegUsers";
    })

    
    document.querySelector("#allVaccinatedUsers").addEventListener("click", e => {
        location.href = "index4.html?name=allVaccinatedUsers";    
    })
    
    document.querySelector("#nonVaccinatedUsers").addEventListener("click", e => {
        location.href = "index4.html?name=nonVaccinatedUsers";
    })

    document.querySelector("#goBack").addEventListener("click", e => {
        location.href = "index2.html?name=" + currentObj.email;
    })

    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    