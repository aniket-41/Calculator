function typ(text) {
    let displayContent = document.getElementById('Screen');
    console.log(text);
    if (displayContent.value == 0) {
        displayContent.value = text;

    }
    else {
        displayContent.value += text;
    }
}
function clr(){
    document.getElementById('Screen').value='00';;

}

function ans() {
    let displayContent = document.getElementById('Screen');
    console.log(eval(displayContent.value));
    displayContent.value = eval(displayContent.value);
}
document.getElementById('Screen').value = '00';


var input = document.getElementById("Screen");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    
    document.getElementById("evaluate").click();
  }
});