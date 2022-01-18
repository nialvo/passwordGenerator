// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables
var size;//size of password
var spe;//presence of special characters
var num;//presence of numerical characters
var low;//presence of lowercase characters
var upp;//presence of uppercase characters
var nspe;//number of special characters
var nnum;//number of numerical characters
var nlow;//number of lowercase characters
var nupp;//number of uppercase characters
var numTypes;//number of different characte types
var inc;//number of each character type 
var pw="";//password string holder
var max;//maximum + 1 of decimal unicode for a character type
var min;//minimum of decimal unicode for a character type
//lowercase, uppercase, numeric, and/or special characters////////////////////////
//special: 33-47 
//numeric: 48-57
//upper: 65-90
//lower: 97-122

// Write password to the #password input
function writePassword() {
    //reinitialize variables
    size=0;
    spe=0;
    num=0;
    low=0;
    upp=0;
    nspe=0;
    nnum=0;
    nlow=0;
    nupp=0;
    numTypes=0;
    inc=0;
    pw="";
    max=0;
    min=0;
   
    

    var password = generatePassword();
    
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






function generatePassword(){
    getSize();
    getType();
    inc = Math.floor(size/numTypes);//get even allocations of each character type

    //by default number of each character is 0 per reinitialization
    //if a character type is used allocate and even share, then we fill in at the end to get to full password size

    if(spe=="Y"){
        nspe=inc;
    }
    if(num=="Y"){
        nnum=inc;
    }
    if(low=="Y"){
        nlow=inc;
    }
    if(upp=="Y"){
        nupp=inc;
    }

    

    
    //add special characters
    max=48;
    min=33;
    
    for(let i=0; i<nspe; i++){

        pw=pw+String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
        

    }
    
    //add numerical characters
    max=58;
    min=48;
    for(let i=0; i<nnum; i++){

        pw=pw+String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
        

    }
    
    //add uppercase characters
    max=91;
    min=65
   
    for(let i=0; i<nupp; i++){

        pw=pw+String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
        

    }
    
    //add lowercase characters
    max=123;
    min=97
    
    for(let i=0; i<nlow; i++){

        pw=pw+String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
        

    }
    
    
    //add rounded down characters 
    if(spe=="Y"){
        max=48;
        min=33;
    }else if(num=="Y"){
        max=58;
        min=48;
    }else if(upp="Y"){
        max=91;
        min=65
    }else if(low=="Y"){
        max=123;
        min=97
    }
    while(pw.length<size){

        pw=pw+String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
        

    }
    

    return pw;
    
    



    

}


//get size of password
//check that entry is valid
function getSize(){
    size=parseInt(prompt("Please enter the number of characters (8-128)","# of characters"));
    while(!(size>=8&&size<=128)){
        size=parseInt(prompt("Please enter a number of characters between 8 and 128!","# of characters"));
    }
}

//get type of password
//check that each entry is valid
//check that at least one entry is Y
function getType(){
    

    do{
        while(!(spe=="Y"||spe=="N")){
            spe = prompt("Should the password contain special characters? Enter Y or N","Y/N").toUpperCase();
        }
        while(!(num=="Y"||num=="N")){
            num = prompt("Should the password contain numeric characters? Enter Y or N","Y/N").toUpperCase();
        }
        while(!(low=="Y"||low=="N")){
            low = prompt("Should the password contain lowercase characters? Enter Y or N","Y/N").toUpperCase();
        }
        while(!(upp=="Y"||upp=="N")){
            upp = prompt("Should the password contain uppercase characters? Enter Y or N","Y/N").toUpperCase();
        }

        
        //if all N show alert
        if(spe=="N"&&num=="N"&&low=="N"&&upp=="N"){
            alert("you must have at least one type of character!")
            spe=0;
            num=0;
            low=0;
            upp=0;
        }


    //if all N repeat process
    }while(spe==0&&num==0&&low==0&&upp==0);


    //count number of different character types
    if(spe=="Y"){
        numTypes++;
    }
    if(num=="Y"){
        numTypes++;
    }
    if(low=="Y"){
        numTypes++;
    }
    if(upp=="Y"){
        numTypes++;
    }
    


}
