let body = document.getElementsByTagName("body");
let compName = document.getElementsByTagName("div");
let projectData = document.getElementsByClassName("project");
let navbar = document.getElementById("navbar");
let links = document.getElementById("list-link");
let cancelNavbar = document.getElementById("cancel-bar");
cancelNavbar.addEventListener("click", () => {
   links.style.display="none";
   navbar.style.display = "block";
})
let i = 0;

function letterGame(){
const company = "A k i b T e c h";
const nameArray = company.split(" ");

if(i < nameArray.length)
{
   compName[0].innerText += nameArray[i];
  
}else{
   compName[0].innerText = "";
   i = 0;
   compName[0].innerText += nameArray[i];

}
   
i +=1;

}
setInterval(letterGame, 300);

navbar.addEventListener("click", () => {
links.style.display = "flex";
navbar.style.display = "none";
})

function projectCounter(){
   console.log()
}

projectCounter();