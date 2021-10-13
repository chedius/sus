var message = "";

var uname = document.querySelector("#uname");
function send() {
    var msg = document.getElementById("uname");
    message = msg.outerHTML;
    console.log(message);
}

console.log('Allahu akbar');


// document.addEventListener('click',function(e){
//     var tag=e.target.tagName.toLowerCase();
//     var button=e.target.tagName.toLowerCase();

//     switch(tag){
//         case "button":
//             //use e.target to track this button event
//             break;
//     }
// });

function handleClick(event: Event & {
    target: HTMLButtonElement
  }) {
    const { target } = event
    console.log(target.value);
  }