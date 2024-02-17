let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = true;


function validateForm(){
    if(username.value==""){
        document.getElementById("usererror").innerHTML = "Username is Empty";
        flag = false;
    }else if(username.value.length<5){
        document.getElementById("usererror").innerHTML = "Username require min 5 char";
        flag = false;
    }else{
        document.getElementById("usererror").innerHTML = "";
        flag=true;
    }

    if(password.value==""){
        document.getElementById("passerror").innerHTML = "Password is Empty";
        flag = false;
    }else if(password.value.length<5){
        document.getElementById("passerror").innerHTML = "Password require min 5 char";
        flag = false;

    }else{
        let specialcontaine = false;
        for(let i=0; i<password.value.length; i++){
           let Char = password.value[i];
           if(Char === '@' || Char === '#' || Char === '$' || Char === '%'){
             specialcontaine = true;
             break;
           }

        }

        if(!specialcontaine){
            document.getElementById("passerror").innerHTML = "Please add one Special char";
            flag = false;
        }else{
            flag = true;
        }
    }
    return flag;

    
}