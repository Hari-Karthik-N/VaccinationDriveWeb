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

    const tbody = document.getElementById("table-body");
    let tr, td;


    let choice = (getParameterByName("name"));


    if(choice === "allRegUsers") {
        console.log("inside all reg users");

          allUsers.forEach(element => {
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.innerHTML = element.userName;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = element.email;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = element.city;
            tr.appendChild(td);
            tbody.appendChild(tr);
          });
    }

    if(choice === "allVaccinatedUsers") {

        console.log("inside all vaccinated users");

        allUsers.forEach(element => {
            if(element.nextVaccinationDate == "secondVDate") {
                tr = document.createElement("tr");
                td = document.createElement("td");
                td.innerHTML = element.userName;
                tr.appendChild(td);
                td = document.createElement("td");
                td.innerHTML = element.email;
                tr.appendChild(td);
                td = document.createElement("td");
                td.innerHTML = element.city;
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
          });    
    }

    if(choice === "nonVaccinatedUsers") {

        console.log("inside non vaccinated users");

        allUsers.forEach(element => {
            if(element.firstVaccinationDate == "") {
                tr = document.createElement("tr");
                td = document.createElement("td");
                td.innerHTML = element.userName;
                tr.appendChild(td);
                td = document.createElement("td");
                td.innerHTML = element.email;
                tr.appendChild(td);
                td = document.createElement("td");
                td.innerHTML = element.city;
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
          });  
    }
    

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
