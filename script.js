
document.querySelector("#submit").addEventListener("click", e => {
    let obj = {};
    obj.name = document.querySelector("#name").value;
    obj.age = document.querySelector("#age").value;
    if(document.querySelector("#male").checked) {
        obj.gender = "Male";
    } else if (document.querySelector("#female").checked) {
        obj.gender = "Female";
    }
    obj.phone = document.querySelector("#phone").value;
    obj.city = document.querySelector("#city").value;
    obj.email = document.querySelector("#email").value;
    obj.firstVaccinationDate = "";
    obj.secondVaccinationDate = "";
    obj.nextVaccinationDate = "";
    document.cookie += obj.name + "," + obj.age + "," + obj.gender + "," + obj.phone + "," + obj.city + "," + obj.email + "," + obj.firstVaccinationDate + "," + obj.secondVaccinationDate + "," + obj.nextVaccinationDate + "-";
    location.href = "index1.html";
})