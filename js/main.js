function toggleon(source) {
    console.log('test')
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i].checked)
        if (checkboxes[i] != true)
            checkboxes[i].checked = true;
    }
}

function toggleoff(source) {
    console.log('test')
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i].checked)
        if (checkboxes[i] != false)
            checkboxes[i].checked = false;
    }
}
function shownavigation(){
    document.querySelector('.wrapper').style.left ="0";
    document.querySelector('#middle').style.display ="none;"
    document.querySelector('.shownav').style.display="none"
    document.querySelector('.showim').style.display="inline"
}
function showimage(){
    document.querySelector('.wrapper').style.left ="-100%";
    document.querySelector('#middle').style.display ="block";
    document.querySelector('.shownav').style.display="inline"
    document.querySelector('.showim').style.display="none"
}
let toggle = false;
function shownerve(){
    if(toggle){
        document.querySelector('.im42').style.display = "none"
        toggle = false;
    }else{
        document.querySelector('.im42').style.display = "block"
        toggle = true;
    }
}