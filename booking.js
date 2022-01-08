function getReady(){
    getIdValue();
}
function getIdValue(){
    var adult = document.getElementById("quantity-adult").value;
    var child = document.getElementById("quantity-child").value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var icNumber = document.getElementById("icNumber").value;
    var cardHolderName = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expireDate = document.getElementById("expireDate").value;
    var cvv = document.getElementById("cvv").value;
    var place = document.getElementById("place").value;
    if(place == 1){
        var price = document.getElementById("price").innerHTML = "188RM";
    }
    else if(place == 2){
        var price = document.getElementById("price").innerHTML = "179RM";
    }
    else if(place == 3){
        var price = document.getElementById("price").innerHTML = "159RM";
    }
    else if(place == 4){
        var price = document.getElementById("price").innerHTML = "599RM";
    }
    else if(place == 5){
        var price = document.getElementById("price").innerHTML = "498RM";
    }
    else if(place == 6){
        var price = document.getElementById("price").innerHTML = "853RM";
    }

    if(adult <= 0){
        var eAdult = document.getElementById("eAdult").innerHTML = "Please input valid number of adult passenger";   
    }
    if(adult <= 0 && child <=0){
        var eChild = document.getElementById("eChild").innerHTML = "Please input valid number of child passenger";   
    }
    if(firstName == "" || isNaN(firstName)== false){
        var efname = document.getElementById("eFname").innerHTML = "Please input valid name";
    }
    if(lastName == "" || isNaN(lastName)== false){
        var elname = document.getElementById("eLname").innerHTML = "Please input valid name";
    }
    if(email == "" || isNaN(email)== false){
        var eEmail = document.getElementById("eEmail").innerHTML = "Please input valid email";
    }
    if(number == "" || isNaN(number)== true){
        var eNumber = document.getElementById("eNumber").innerHTML = "Please input valid number";
    }
    if(icNumber == "" || isNaN(icNumber)== false){
        var eIcNumber = document.getElementById("eIcNumber").innerHTML = "Please input valid IC or Passport Number";
    }
    if(cardHolderName == "" || isNaN(cardHolderName)== false){
        var eName = document.getElementById("eName").innerHTML = "Please input valid card holder name.";
    }
    if(cardNumber == "" || isNaN(cardNumber)== true){
        var eCardNumber = document.getElementById("eCardNumber").innerHTML = "Please input valid number";
    }
    if(expireDate == "" || isNaN(expireDate)== true){
        var eExpireDate = document.getElementById("eExpireDate").innerHTML = "Please input valid number";
    }
    if(cvv == "" || isNaN(cvv)== true){
        var eCvv = document.getElementById("eCvv").innerHTML = "Please input valid number";
    }
}
