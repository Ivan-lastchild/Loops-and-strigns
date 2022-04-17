let srtOfUser = prompt('Write something with HTML tags');

let arrOfUser = srtOfUser.split("");

let clearStr = "";

loop: for(let i = 0; i < arrOfUser.length; i++){

    if (arrOfUser[i] != "<"){
        clearStr += arrOfUser[i];
    } else if(arrOfUser[i+1] !== "/"){

        do{
            i+=2;
            continue loop;
        } while(arrOfUser[i] !== ">");

    } else {

        do{
            i+=3;
            continue loop;
        } while(arrOfUser[i] !== ">");
    }
}

alert(clearStr);
