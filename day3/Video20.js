console.log("video 20")

const element = document.getElementById("username");

const element1 = document.getElementById("Thehuybutton");

const element2 = document.getElementById("changText");

const myTextelement = document.getElementById("myText");

const backButton = document.getElementById("backButton");


element1.addEventListener("click",function(){
    console.log("you clicked the button")
})

console.log(element1);

function handleclickbtn(){
    console.log(" you click the button")
}

element2.addEventListener("click", function() {
    console.log("you clicked the new button")
    myTextelement.innerHTML = "changed the content";
})

backButton.addEventListener("click", function()  {
    
    myTextelement.innerHTML = "video 49";
})