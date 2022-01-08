function getReady(){
    getIdValue();
}
function getIdValue(){
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var icNumber = document.getElementById("icNumber").value;
    var cardHolderName = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var cvv = document.getElementById("cvv").value;
    if(firstName == "" || isNaN(firstName)== false){
        var efname = document.getElementById("eFname").innerHTML = "Please input valid name";
    }
    if(lastName == "" || isNaN(lastName)== false){
        var elname = document.getElementById("eLname").innerHTML = "Please input valid name";
    }
    if(email == "" || isNaN(email)== false){
        var eEmail = document.getElementById("eEmail").innerHTML = "Please input valid name";
    }
}