function renderContact(){
    const contactopen = document.querySelector(".Contact"); 
contactopen.classList.add("opencontact");
  let body = document.querySelector("body");
  body.classList.add("body-locked") ;
}

const contactbtn = document.querySelector("#contactbtn");
contactbtn.addEventListener("click",renderContact);