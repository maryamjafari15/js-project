const contactopen = document.querySelector(".Contact"); 

function renderContact(){   
contactopen.classList.add("opencontact");
  let body = document.querySelector("body");
  body.classList.add("body-locked") ;
}

const contactbtn = document.querySelector("#contactbtn");
contactbtn.addEventListener("click",renderContact);

function closeContact(){
 contactopen.classList.remove("opencontact");
  let body = document.querySelector("body");
  body.classList.remove("body-locked");
}

//new
contactopen.addEventListener("click", (event) => {
  if(event.target == contactopen) {
    closeContact();
  }
});