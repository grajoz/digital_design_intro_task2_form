const PSW = document.getElementById('psw');
const PSW_REPEAT = document.getElementById('psw_repeat');
const PROMT = document.getElementById("promt");
let ifPasswordEquelly = false;

function onchangePromt () {

    if (PSW.value!=PSW_REPEAT.value) {
        PROMT.classList.remove('none');
        PROMT.classList.add('visible');
    } else {
        PROMT.classList.remove('visible');
        PROMT.classList.add('none');
        ifPasswordEquelly = true;
    }

}

function delPromt (){
    if (PROMT.classList=="visible") {
        PROMT.classList.remove('visible');
        PROMT.classList.add('none');
        ifPasswordEquelly = false;
    }
}

function ifSubmit () {
    console.log("ok")
    return ifPasswordEquelly;
}