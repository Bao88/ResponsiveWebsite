// Global variables
myArray = [];
placement = 0;
reset = false;

function checkData(){

    if(localStorage.length > 0){
        retrieveLocal();        
        retrieveData();
    }
}

function functionStore(){
    var text = document.getElementById("t").value;
    if(text == "clear"){
        resetData();
        alert("Storage has been cleared");
    } else if(text == "save") {
        saveData();
        alert("Saved to Storage");
    } else {
        if(myArray != null && myArray.includes(text)) {
            alert("The name has already been registered");
        } else {
            if(text.length == 0) alert("Can't register a person with no name");
            else myArray.push(text);
        }
        
        retrieveData();
    }
    // Reset the form
    document.getElementById("regForm").reset();
}

function saveData(){
    storageClear();
    storeLocal();
}




function resetData(){
    storageClear();
    while(placement > 0) {
        myArray.pop();
        placement--;
    }
    // alert("Placement is: " + placement);
    document.getElementById("tabletOfDestiny").style.animation = "fadeOut 2s forwards";
    reset = true;
    // document.getElementById("tabletOfDestiny").style.transition = "all 1s linear 0";
}

function storeLocal(){
    localStorage.setItem("registerItems", JSON.stringify(myArray));
}

function retrieveLocal(){
    // alert(localStorage.getItem("registerItems"));
    myArray = JSON.parse(localStorage.getItem("registerItems"));
    if(myArray == null) myArray = [];
}

function storageClear(){
    localStorage.clear();
}

function retrieveData(){
//    document.getElementById("demo").innerHTML = localStorage.getItem("texts");
    var number = 1;
    // if(placement == 0) var text = "People registered <br>"else 
    var text = "";
 
    if(reset){
      
        document.getElementById("tabletOfDestiny").innerHTML = "";
        reset = false;
        document.getElementById("tabletOfDestiny").style.animation = "fadeIn 2s forwards";
    }
   
    for(i = placement; i < myArray.length; i++){
        text += (number+i) + ". " + "<a href='#'>" + myArray[i] + "</a>" + "<br>";
    }
    placement = i;
   
    // document.getElementById("demo").innerHTML = text;
    document.getElementById("tabletOfDestiny").insertAdjacentHTML("beforeend", text);
}

