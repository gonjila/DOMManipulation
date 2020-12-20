var ul = document.querySelector("ul");
var button = document.getElementById("button");
var input = document.getElementById("input");

function createList(){  
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
        li.appendChild(document.createTextNode(input.value));
        li.setAttribute("class", input.value);
        btn.appendChild(document.createTextNode("remove!"));
        btn.setAttribute("class", input.value);
        ul.appendChild(li);
        ul.appendChild(btn);
        input.value = "";

    btn.addEventListener("click", function(){
        li.remove();
        btn.remove();
    })
}

function additemsafterclick(){
    if (input.value.length > 0){
        createList()
    }
}

function addItemAfterKeypress(KeyboardEvent){
    if (input.value.length > 0 && KeyboardEvent.code === 'Enter'){
        createList()
     } 
}


input.addEventListener("keydown", addItemAfterKeypress)
button.addEventListener("click", additemsafterclick)



var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function getGradiant(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", getGradiant);
color2.addEventListener("input", getGradiant);