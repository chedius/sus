var bttn = document.getElementById("button");
var form = document.getElementById("form");
function handleForm(event) { event.preventDefault();}
form.addEventListener('submit', handleForm);
bttn.onclick = function(){
    var text = (document.getElementById('textbox') as HTMLFormElement).value;
    console.log(text);
    (document.getElementById('textbox') as HTMLFormElement).value = null;
}


import './base.scss';

