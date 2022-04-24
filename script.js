// let srtOfUser = prompt('Write something with HTML tags');

let srtOfUser = "<div> fdgdg </div>";

let arrOfUser = srtOfUser.split("");

let clearStr = "";

let check = true;

for(let char of srtOfUser){
    //console.log(char);
    if(char === "<"){
        check = false;
        continue;
    }

    if(char === ">"){
        check = true;
        continue;
    }

    if(check){
        clearStr += char;
    }
    
}

alert(clearStr);