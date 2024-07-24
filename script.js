const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
let currentDate=new Date();
const d1="    (      Date:" + currentDate.toDateString() + ")";

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "del.png";
    let currentDate=new Date();
    const d1="    (      Date:" + currentDate.toDateString() + ")";
    notesContainer.appendChild(inputBox).appendChild(img);
    notesContainer.append(d1);
})

notesContainer.addEventListener("click" , function(e){
 if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
 }
 else if(e.target.tagName === "P"){
    notes=document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.onkeyup=function(){
            updateStorage();
        }
    })
 }
})

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommanr("insertLineBreak");
        event.preventDefault();
    }
})
