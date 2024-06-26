const input=document.querySelector(".input");
const click=document.querySelector(".click");
const ul=document.querySelector(".list-data");

click.addEventListener("click",()=>{
  if(input.value===""){
    alert("You need to write something");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    ul.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    saveData();
    input.value="";
  }
});

function saveData(){
  localStorage.setItem("data", ul.innerHTML);
}

ul.addEventListener("click", function(e){
  console.log(e.target.parentElement);
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
});

function showTask(){
  ul.innerHTML=localStorage.getItem("data");
}
showTask();
